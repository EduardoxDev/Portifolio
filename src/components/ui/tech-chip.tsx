import { tech } from "@/data/tech";
import { TechIcon } from "./tech-icon";

export function TechChip({ name }: { name: string }) {
  return (
    <span className="chip">
      {tech[name] && <TechIcon name={name} size={12} className="text-fg" />}
      {name}
    </span>
  );
}
