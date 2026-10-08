"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Briefcase, FolderGit2, Languages, Mail, Search, User } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { GitHubIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n";
import { locales, type Locale } from "@/locales";

interface Command {
  id: string;
  group: string;
  label: string;
  icon: React.ReactNode;
  run: () => void;
}

const localeNames: Record<Locale, string> = { en: "English", pt: "Português", es: "Español" };

export function CommandMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { t, setLocale } = useI18n();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // ⌘K / Ctrl+K anywhere toggles the menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  const commands = useMemo<Command[]>(() => {
    const go = (hash: string) => () => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    const open = (url: string) => () => window.open(url, "_blank", "noopener,noreferrer");
    const icon = "size-4 text-muted";

    return [
      { id: "top", group: t.menu.navigation, label: t.menu.top, icon: <ArrowUp className={icon} />, run: go("#top") },
      { id: "about", group: t.menu.navigation, label: t.nav.about, icon: <User className={icon} />, run: go("#about") },
      { id: "experience", group: t.menu.navigation, label: t.nav.experience, icon: <Briefcase className={icon} />, run: go("#experience") },
      { id: "projects", group: t.menu.navigation, label: t.nav.projects, icon: <FolderGit2 className={icon} />, run: go("#projects") },
      { id: "contact", group: t.menu.navigation, label: t.nav.contact, icon: <Mail className={icon} />, run: go("#contact") },
      { id: "github", group: t.menu.links, label: "GitHub", icon: <GitHubIcon className={icon} />, run: open(profile.github.url) },
      ...profile.experience.map((job) => ({
        id: job.id,
        group: t.menu.links,
        label: job.org,
        icon: <ArrowUpRight className={icon} />,
        run: open(job.url),
      })),
      ...(profile.email
        ? [{ id: "email", group: t.menu.links, label: profile.email, icon: <Mail className={icon} />, run: () => (window.location.href = `mailto:${profile.email}`) }]
        : []),
      ...locales.map((l) => ({
        id: `lang-${l}`,
        group: t.menu.language,
        label: localeNames[l],
        icon: <Languages className={icon} />,
        run: () => setLocale(l),
      })),
    ];
  }, [t, setLocale]);

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase()));

  const execute = (cmd: Command | undefined) => {
    if (!cmd) return;
    onOpenChange(false);
    cmd.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      execute(results[active]);
    } else if (e.key === "Escape") {
      onOpenChange(false);
    }
  };

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={(e) => e.target === e.currentTarget && onOpenChange(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.menu.open}
            className="w-full max-w-[520px] overflow-hidden rounded-xl border border-line-strong bg-[#0f0f12] shadow-2xl"
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.15 }}
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="size-4 text-muted" aria-hidden />
              <input
                ref={inputRef}
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                placeholder={t.menu.placeholder}
                className="h-12 w-full bg-transparent text-[14px] text-fg outline-none placeholder:text-muted focus-visible:outline-none"
                aria-label={t.menu.placeholder}
              />
              <kbd className="rounded border border-line-strong px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
            </div>

            <ul className="max-h-[340px] overflow-y-auto p-2" role="listbox">
              {results.length === 0 && <li className="px-3 py-6 text-center text-[13px] text-muted">{t.menu.empty}</li>}
              {results.map((cmd, i) => {
                const header = cmd.group !== lastGroup ? cmd.group : null;
                lastGroup = cmd.group;
                return (
                  <li key={cmd.id}>
                    {header && <p className="px-3 pb-1 pt-3 font-mono text-[10.5px] uppercase tracking-wider text-muted">{header}</p>}
                    <button
                      type="button"
                      role="option"
                      aria-selected={i === active}
                      onMouseMove={() => setActive(i)}
                      onClick={() => execute(cmd)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-[13.5px] transition-colors",
                        i === active ? "bg-white/[0.07] text-fg" : "text-secondary",
                      )}
                    >
                      {cmd.icon}
                      {cmd.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
