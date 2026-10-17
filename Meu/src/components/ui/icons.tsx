import { siGithub } from "simple-icons";

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d={siGithub.path} />
    </svg>
  );
}
