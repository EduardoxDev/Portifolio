"use client";

import type { Contributions } from "@/lib/github";
import { useI18n } from "@/lib/i18n";

const CELL = 10;
const STEP = 13;
const LEFT = 28;
const TOP = 16;

/** Sunset ramp, dark → bright. Level 0 is an empty cell. */
export const LEVEL_COLORS = ["#18181b", "#3d1d1a", "#7a2f2a", "#c7443c", "#ff5a4e"] as const;

export function ContributionGraph({ data }: { data: Contributions }) {
  const { t, locale } = useI18n();
  const intl = locale === "pt" ? "pt-BR" : locale;

  const offset = new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay();
  const weeks = Math.ceil((offset + data.days.length) / 7);
  const width = LEFT + weeks * STEP;
  const height = TOP + 7 * STEP;

  const monthFmt = new Intl.DateTimeFormat(intl, { month: "short", timeZone: "UTC" });
  const dayFmt = new Intl.DateTimeFormat(intl, { weekday: "short", timeZone: "UTC" });
  const dateFmt = new Intl.DateTimeFormat(intl, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

  // Month label on the first column that contains the 1st–7th of a month.
  const months: { col: number; label: string }[] = [];
  data.days.forEach((d, i) => {
    const date = new Date(`${d.date}T00:00:00Z`);
    if (date.getUTCDate() <= 7 && date.getUTCDay() === 0) {
      const col = Math.floor((offset + i) / 7);
      if (!months.length || col - months[months.length - 1].col >= 3) {
        months.push({ col, label: monthFmt.format(date).replace(".", "") });
      }
    }
  });

  // Mon / Wed / Fri, like GitHub (2024-01-01 was a Monday).
  const weekdays = [1, 3, 5].map((row) => ({ row, label: dayFmt.format(new Date(Date.UTC(2024, 0, row))).replace(".", "") }));

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label={`${data.total} ${t.openSource.total}`}>
        {months.map((m) => (
          <text key={`${m.col}-${m.label}`} x={LEFT + m.col * STEP} y={10} className="fill-muted text-[9px]">
            {m.label}
          </text>
        ))}
        {weekdays.map((w) => (
          <text key={w.row} x={0} y={TOP + w.row * STEP + 8.5} className="fill-muted text-[9px]">
            {w.label}
          </text>
        ))}
        {data.days.map((d, i) => {
          const idx = offset + i;
          return (
            <rect
              key={d.date}
              x={LEFT + Math.floor(idx / 7) * STEP}
              y={TOP + (idx % 7) * STEP}
              width={CELL}
              height={CELL}
              rx={2}
              fill={LEVEL_COLORS[d.level]}
            >
              <title>{`${d.count} · ${dateFmt.format(new Date(`${d.date}T00:00:00Z`))}`}</title>
            </rect>
          );
        })}
      </svg>

      <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-muted">
        <span>
          <span className="text-fg">{data.total.toLocaleString(intl)}</span> {t.openSource.total}
        </span>
        <span className="flex items-center gap-1.5">
          {t.openSource.less}
          {LEVEL_COLORS.map((c) => (
            <span key={c} className="size-2.5 rounded-[2px]" style={{ background: c }} />
          ))}
          {t.openSource.more}
        </span>
      </div>
    </div>
  );
}
