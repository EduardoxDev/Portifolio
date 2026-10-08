/**
 * Curated selection of real repositories from github.com/EduardoxDev.
 * Descriptions are localized in `src/locales`; live metadata (URL, stars,
 * homepage) is fetched from the GitHub API in `src/lib/github.ts`.
 */
export type ProjectSlug = "relayguard" | "postgresOperator" | "httpStorm" | "sentinel" | "logstream" | "miniRuntime";

export interface ProjectSeed {
  slug: ProjectSlug;
  repo: string;
  name: string;
  tags: string[];
}

export const projects: ProjectSeed[] = [
  { slug: "relayguard", repo: "RelayGuard-High-Availability-Webhook-Engine", name: "RelayGuard", tags: ["Go", "Docker"] },
  { slug: "postgresOperator", repo: "Postgres-Operator", name: "Postgres Operator", tags: ["Go", "Kubernetes", "PostgreSQL"] },
  { slug: "httpStorm", repo: "HTTP-Storm", name: "HTTP Storm", tags: ["C++20", "epoll", "TLS 1.3"] },
  { slug: "sentinel", repo: "Sentinel-Real-Time-Fraud-Detection-Engine", name: "Sentinel", tags: ["Rust", "Streaming"] },
  { slug: "logstream", repo: "LogStream-Distributed-Log-Indexing-Engine", name: "LogStream", tags: ["Java", "Search"] },
  { slug: "miniRuntime", repo: "Mini-Runtime-Container", name: "Mini Runtime", tags: ["Go", "Linux", "cgroups"] },
];

export interface Project extends ProjectSeed {
  url: string;
  homepage?: string;
  stars?: number;
}
