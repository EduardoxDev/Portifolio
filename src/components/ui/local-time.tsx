"use client";

import { useEffect, useState } from "react";

/** Live HH:MM in a given IANA zone. Renders a placeholder on the server to avoid hydration drift. */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return <time className="tabular-nums">{time ?? "--:--"}</time>;
}
