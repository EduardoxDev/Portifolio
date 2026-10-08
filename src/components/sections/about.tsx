"use client";

import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n";

const levelColor = { native: "#ff9a3d", fluent: "#ff3d81", learning: "#b04cff" } as const;

export function About() {
  const { t, locale } = useI18n();

  return (
    <Section id="about" title={t.about.title}>
      <div className="space-y-5 text-[15px] leading-[1.75] text-secondary">
        {profile.bio[locale].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-mono text-[12px] text-muted">{t.about.languages}</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {profile.languages.map((lang) => (
            <li key={lang.name} className="panel px-3.5 py-3">
              <p className="text-[14px] font-medium text-fg">{lang.name}</p>
              <p className="mt-1 flex items-center gap-1.5 text-[12px] text-secondary">
                <span className="size-1.5 rounded-full" style={{ background: levelColor[lang.level] }} />
                {t.about.levels[lang.level]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
