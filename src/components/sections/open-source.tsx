"use client";

import { ArrowUpRight, BookMarked, Code2, ExternalLink, Star, Users } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { TechChip } from "@/components/ui/tech-chip";
import { profile } from "@/data/profile";
import type { GitHubData } from "@/lib/github";
import { useI18n } from "@/lib/i18n";
import { ContributionGraph } from "./contribution-graph";

export function OpenSource({ projects, stats, contributions }: GitHubData) {
  const { t } = useI18n();

  return (
    <Section id="projects" title={t.openSource.title} subtitle={t.openSource.subtitle}>
      {stats && (
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat icon={<Users className="size-4" strokeWidth={1.75} />} label={t.openSource.followers} value={stats.followers} />
          <Stat icon={<Star className="size-4" strokeWidth={1.75} />} label={t.openSource.stars} value={stats.stars} />
          <Stat icon={<BookMarked className="size-4" strokeWidth={1.75} />} label={t.openSource.repositories} value={stats.repositories} />
          <div className="panel p-4">
            <p className="flex items-center gap-2 text-[13px] text-secondary">
              <Code2 className="size-4" strokeWidth={1.75} />
              {t.openSource.topLanguages}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {stats.topLanguages.map((l) => (
                <TechChip key={l} name={l} />
              ))}
            </div>
          </div>
        </div>
      )}

      {contributions && (
        <div className="mt-8">
          <h3 className="font-mono text-[12px] text-muted">{t.openSource.graph}</h3>
          <div className="panel mt-3 p-4">
            <ContributionGraph data={contributions} />
          </div>
        </div>
      )}

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug} className="panel panel-hover flex flex-col p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[14px] font-semibold text-fg">{p.name}</h3>
              {p.stars !== undefined && (
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted">
                  <Star className="size-3" strokeWidth={1.75} aria-hidden />
                  {p.stars}
                </span>
              )}
            </div>
            <p className="mt-2 line-clamp-3 text-[13px] leading-[1.55] text-secondary">{t.openSource.projects[p.slug]}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <TechChip key={tag} name={tag} />
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-4 text-[12.5px] text-secondary">
              <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                <GitHubIcon className="size-3.5" />
                {t.openSource.source}
              </a>
              {p.homepage && (
                <a href={p.homepage} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                  <ExternalLink className="size-3.5" strokeWidth={1.75} />
                  {t.openSource.demo}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <a
        href={`${profile.github.url}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-secondary transition-colors hover:text-fg"
      >
        {t.openSource.all}
        <ArrowUpRight className="size-3.5" aria-hidden />
      </a>
    </Section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="panel p-4">
      <p className="flex items-center gap-2 text-[13px] text-secondary">
        {icon}
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-fg">{value.toLocaleString()}</p>
    </div>
  );
}
