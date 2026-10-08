import {
  siC,
  siCplusplus,
  siDocker,
  siGo,
  siKubernetes,
  siLinux,
  siOpenjdk,
  siPostgresql,
  siPython,
  siRedis,
  siRust,
  siTauri,
  siTerraform,
  siTypescript,
} from "simple-icons";

export interface TechMeta {
  /** SVG path on a 24×24 viewBox (Simple Icons). Absent for marks drawn by hand. */
  path?: string;
  /** Brand colour, lifted where the official one disappears on #09090b. */
  color: string;
}

export const tech: Record<string, TechMeta> = {
  TypeScript: { path: siTypescript.path, color: "#3178C6" },
  Go: { path: siGo.path, color: "#00ADD8" },
  Rust: { path: siRust.path, color: "#DEA584" },
  "C++": { path: siCplusplus.path, color: "#5B9BD5" },
  "C++20": { path: siCplusplus.path, color: "#5B9BD5" },
  C: { path: siC.path, color: "#A8B9CC" },
  Java: { path: siOpenjdk.path, color: "#F89820" },
  Python: { path: siPython.path, color: "#4B8BBE" },
  AWS: { color: "#FF9900" },
  Kubernetes: { path: siKubernetes.path, color: "#326CE5" },
  Terraform: { path: siTerraform.path, color: "#844FBA" },
  Linux: { path: siLinux.path, color: "#FCC624" },
  PostgreSQL: { path: siPostgresql.path, color: "#6B8EE8" },
  Redis: { path: siRedis.path, color: "#FF4438" },
  Docker: { path: siDocker.path, color: "#2496ED" },
  Tauri: { path: siTauri.path, color: "#24C8D8" },
};

/** GitHub linguist colours. */
export const languageColors: Record<string, string> = {
  Go: "#00ADD8",
  "C++": "#F34B7D",
  C: "#A8B9CC",
  Rust: "#DEA584",
  Java: "#B07219",
  Python: "#3572A5",
  TypeScript: "#3178C6",
  PowerShell: "#5391FE",
  Dockerfile: "#6B8A93",
  Makefile: "#5E9A3A",
  CMake: "#DA3434",
  Shell: "#89E051",
};
