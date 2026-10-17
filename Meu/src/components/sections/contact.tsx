"use client";

import { Mail } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact" title={t.contact.title}>
      <p className="text-[15px] leading-[1.7] text-secondary">{t.contact.text}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={profile.github.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-fg px-3.5 py-2 text-[13px] font-semibold text-bg transition-opacity hover:opacity-90"
        >
          <GitHubIcon className="size-4" />
          github.com/{profile.github.user}
        </a>
        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-line-strong px-3.5 py-2 text-[13px] font-semibold text-fg transition-colors hover:bg-white/5"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            {profile.email}
          </a>
        )}
      </div>
    </Section>
  );
}
