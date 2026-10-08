import { profile } from "@/data/profile";
import { projects, type Project } from "@/data/projects";

const REVALIDATE_SECONDS = 60 * 60 * 6;

async function getJSON<T>(url: string, github = true): Promise<T | null> {
  try {
    const headers: HeadersInit = github ? { Accept: "application/vnd.github+json" } : {};
    if (github && process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(url, { headers, next: { revalidate: REVALIDATE_SECONDS } });
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

interface GitHubRepo {
  name: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export interface GitHubStats {
  followers: number;
  repositories: number;
  stars: number;
  topLanguages: string[];
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Contributions {
  total: number;
  days: ContributionDay[];
}

export interface GitHubData {
  projects: Project[];
  stats: GitHubStats | null;
  contributions: Contributions | null;
}

/** Everything the page shows from GitHub, in one pass. Each piece degrades to null/static on failure. */
export async function getGitHubData(): Promise<GitHubData> {
  const user = profile.github.user;
  const [account, repos, contrib] = await Promise.all([
    getJSON<{ followers: number }>(`https://api.github.com/users/${user}`),
    getJSON<GitHubRepo[]>(`https://api.github.com/users/${user}/repos?per_page=100`),
    // Public contribution calendar (GitHub's own API needs a token for this).
    getJSON<{ total: { lastYear: number }; contributions: ContributionDay[] }>(
      `https://github-contributions-api.jogruber.de/v4/${user}?y=last`,
      false,
    ),
  ]);

  const own = repos?.filter((r) => !r.fork) ?? null;

  const stats: GitHubStats | null =
    account && own
      ? {
          followers: account.followers,
          repositories: own.length,
          stars: own.reduce((sum, r) => sum + r.stargazers_count, 0),
          topLanguages: Object.entries(
            own.reduce<Record<string, number>>((acc, r) => {
              if (r.language) acc[r.language] = (acc[r.language] ?? 0) + 1;
              return acc;
            }, {}),
          )
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([name]) => name),
        }
      : null;

  const enriched: Project[] = projects.map((seed) => {
    const repo = own?.find((r) => r.name === seed.repo);
    return {
      ...seed,
      url: repo?.html_url ?? `${profile.github.url}/${seed.repo}`,
      homepage: repo?.homepage || undefined,
      stars: repo?.stargazers_count,
    };
  });

  return {
    projects: enriched,
    stats,
    contributions: contrib ? { total: contrib.total.lastYear, days: contrib.contributions } : null,
  };
}
