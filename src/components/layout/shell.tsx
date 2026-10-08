"use client";

import { MotionConfig } from "framer-motion";
import { useState } from "react";
import { CommandMenu } from "@/components/menu/command-menu";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

/** Client frame around the page: navbar, ⌘K menu and footer share the menu state here. */
export function Shell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <Navbar onOpenMenu={() => setMenuOpen(true)} />
      <main>{children}</main>
      <Footer />
      <CommandMenu open={menuOpen} onOpenChange={setMenuOpen} />
    </MotionConfig>
  );
}
