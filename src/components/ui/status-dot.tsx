export function StatusDot({ color = "#ff3d81" }: { color?: string }) {
  return (
    <span className="relative inline-flex size-1.5 shrink-0" aria-hidden>
      <span className="status-ping absolute inset-0 rounded-full" style={{ background: color }} />
      <span className="relative size-1.5 rounded-full" style={{ background: color }} />
    </span>
  );
}
