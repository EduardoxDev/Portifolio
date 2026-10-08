"use client";

import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { TechChip } from "@/components/ui/tech-chip";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { t } = useI18n();

  return (
    <Section id="experience" title={t.experience.title}>
      <ol>
        {profile.experience.map((job) => {
          const copy = t.experience.items[job.id];
          return (
            <li key={job.id} className="grid gap-3 sm:grid-cols-[140px_1fr] sm:gap-0">
              <div className="font-mono text-[12.5px] sm:pt-1">
                <p className={job.current ? "text-fg/90" : "text-secondary"}>
                  {job.current ? `${job.start} — ${t.experience.present}` : job.end && job.end !== job.start ? `${job.start} — ${job.end}` : job.start}
                </p>
                {job.current && <p className="mt-1 text-[11.5px] text-sunset font-semibold">{t.experience.current}</p>}
              </div>

              <div className="relative border-line pb-12 sm:border-l sm:pl-8">
                <span
                  aria-hidden
                  className={cn(
                    "absolute -left-[4.5px] top-2.5 hidden size-2 rounded-full ring-4 ring-bg sm:block",
                    job.current ? "bg-pink" : "bg-faint",
                  )}
                />
                <h3 className="text-[17px] font-semibold text-fg">{copy.role}</h3>
                <p className="mt-0.5 text-[14px] text-secondary">{copy.subtitle}</p>

                <p className="mt-4 text-[14.5px] leading-[1.7] text-secondary">{copy.summary}</p>
                <ul className="mt-4 space-y-2 text-[14px] leading-[1.6] text-secondary">
                  {copy.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-muted" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <TechChip key={tag} name={tag} />
                  ))}
                </div>

                <div className="mt-5 flex gap-5 text-[13px] text-secondary">
                  <a href={job.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                    <ArrowUpRight className="size-3.5" aria-hidden />
                    {job.org}
                  </a>
                  <a href={job.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                    <GitHubIcon className="size-3.5" />
                    {t.openSource.source}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
