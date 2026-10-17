import { tech } from "@/data/tech";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  /** Override the brand colour (e.g. monochrome watermarks). */
  color?: string;
}

export function TechIcon({ name, size = 24, className, color }: TechIconProps) {
  const meta = tech[name];
  if (!meta) return null;
  const fill = color ?? meta.color;

  if (!meta.path) {
    // AWS isn't distributed by Simple Icons — a minimal wordmark + smile instead.
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden>
        <text x="12" y="13" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="currentColor" fontFamily="system-ui, sans-serif" letterSpacing="-0.3">
          aws
        </text>
        <path d="M4.5 16.2c4.6 2.6 10.4 2.6 15 0" stroke={fill} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M17.6 15.1l2.1 1-0.9 2.1" stroke={fill} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill={fill} aria-hidden>
      <path d={meta.path} />
    </svg>
  );
}
