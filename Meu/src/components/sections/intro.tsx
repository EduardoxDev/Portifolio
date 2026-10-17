"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { GitHubIcon } from "@/components/ui/icons";
import { LocalTime } from "@/components/ui/local-time";
import { StatusDot } from "@/components/ui/status-dot";
import { TechChip } from "@/components/ui/tech-chip";
import { profile } from "@/data/profile";
import type { GitHubData } from "@/lib/github";
import { useI18n } from "@/lib/i18n";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Intro({ stats, contributions }: Pick<GitHubData, "stats" | "contributions">) {
  const { t } = useI18n();
  const current = profile.experience[0];

  const numbers = [
    { value: String(profile.age), label: t.stats.age },
    { value: `${profile.yearsBuilding}+`, label: t.stats.years },
    stats && { value: String(stats.repositories), label: t.stats.repos },
    stats && { value: String(stats.stars), label: t.stats.stars },
    contributions && { value: contributions.total.toLocaleString(), label: t.stats.contributions },
  ].filter(Boolean) as { value: string; label: string }[];

  return (
    <section id="top" className="pt-16 md:pt-24">
      <Container>
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <motion.h1 {...rise(0)} className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {profile.name}
            </motion.h1>
            <motion.p {...rise(0.05)} className="mt-2 text-[15px] font-semibold text-fg/90">
              {profile.headline} · {profile.role}
            </motion.p>

            <motion.p {...rise(0.1)} className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[12.5px] text-secondary">
              {profile.focus.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </motion.p>

            <motion.div {...rise(0.15)} className="mt-5 flex flex-col gap-2 text-[13px] text-secondary">
              <p className="flex items-center gap-2">
                <MapPin className="size-3.5" strokeWidth={1.75} aria-hidden />
                {t.intro.born} · <LocalTime timeZone={profile.timeZone} /> {t.intro.localTime}
              </p>
              <a
                href={current.url}
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-2 transition-colors hover:text-fg"
              >
                <StatusDot />
                {t.intro.building} <span className="font-medium text-fg">{current.org}</span>
                <ArrowUpRight className="size-3.5 opacity-60 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={176}
              height={176}
              priority
              quality={92}
              className="size-28 rounded-xl object-cover object-[50%_35%] ring-1 ring-line-strong sm:size-36"
            />
          </motion.div>
        </div>

        <motion.ul {...rise(0.2)} className="mt-7 flex flex-wrap gap-2">
          {profile.stack.map((name) => (
            <li key={name}>
              <TechChip name={name} />
            </li>
          ))}
        </motion.ul>

        <motion.div {...rise(0.25)} className="mt-7 flex items-center gap-3">
          <a
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line-strong px-3 py-1.5 text-[13px] font-semibold text-fg transition-colors hover:bg-white/5"
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line-strong px-3 py-1.5 text-[13px] font-semibold text-fg transition-colors hover:bg-white/5"
            >
              <Mail className="size-4" strokeWidth={1.75} />
              Email
            </a>
          )}
        </motion.div>

        <motion.dl {...rise(0.3)} className="mt-12 grid grid-cols-3 gap-y-6 border-t border-line pt-8 sm:grid-cols-5">
          {numbers.map((n) => (
            <div key={n.label}>
              <dd className="text-2xl font-bold tracking-tight text-fg">{n.value}</dd>
              <dt className="mt-1 text-[12.5px] leading-tight text-secondary">{n.label}</dt>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
