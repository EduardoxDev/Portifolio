import { cn } from "@/lib/cn";

/** Narrow reading column — the whole page lives in it. */
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[680px] px-5", className)}>{children}</div>;
}
