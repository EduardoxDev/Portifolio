"use client";

import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-8 border-t border-line">
      <Container className="flex items-center justify-between py-8 text-[13px] text-muted">
        <div>
          <p className="font-medium text-secondary">{profile.name}</p>
          <p className="mt-1">
            © {new Date().getFullYear()} · {t.footer.built}
          </p>
        </div>
        <a
          href="#top"
          aria-label={t.footer.top}
          className="grid size-9 place-items-center rounded-md border border-line-strong text-secondary transition-colors hover:text-fg"
        >
          <ArrowUp className="size-4" strokeWidth={1.75} />
        </a>
      </Container>
    </footer>
  );
}
