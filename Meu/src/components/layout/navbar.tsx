"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GitHubIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n";
import { locales } from "@/locales";

export function Navbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent bg-bg",
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-[680px] items-center gap-6 px-5">
        <a href="#top" className="flex items-center gap-2.5" aria-label={profile.name}>
          <Image
            src={profile.photo.src}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-md object-cover object-[50%_30%] ring-1 ring-line-strong"
            priority
          />
          <span className="font-mono text-[13px] font-semibold text-fg">{profile.handle}</span>
        </a>

        <ul className="hidden items-center gap-5 text-[13px] text-secondary sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <div role="group" aria-label={t.nav.language} className="flex items-center rounded-md border border-line-strong p-0.5">
            {locales.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLocale(l)}
                aria-pressed={locale === l}
                className={cn(
                  "rounded px-1.5 py-0.5 font-mono text-[10.5px] uppercase transition-colors",
                  locale === l ? "bg-white/10 text-fg" : "text-muted hover:text-fg",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenMenu}
            aria-label={t.menu.open}
            className="whitespace-nowrap rounded-md border border-line-strong px-1.5 py-0.5 font-mono text-[11px] text-secondary transition-colors hover:text-fg"
          >
            {isMac ? "⌘K" : "Ctrl K"}
          </button>

          <a
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-md border border-line-strong px-2.5 py-1 text-[12px] font-semibold text-fg transition-colors hover:bg-white/5 sm:inline-flex"
          >
            <GitHubIcon className="size-3.5" />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
