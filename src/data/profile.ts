import type { Locale } from "@/locales";

/**
 * Single source of truth for personal data.
 * UI copy lives in `src/locales`; facts about Eduardo live here.
 */
export const profile = {
  name: "Eduardo Maciel",
  handle: "eduardo.",
  role: "Software Engineer",
  /** Shown in the browser tab: "Eduardo Maciel | Backend Developer". */
  headline: "Backend Developer",
  location: "Brazil",
  /** IANA zone for the live clock. */
  timeZone: "America/Sao_Paulo",
  age: 15,
  yearsBuilding: 5,

  github: {
    user: "EduardoxDev",
    url: "https://github.com/EduardoxDev",
  },

  /** Public contact email. Leave empty to hide every Email link. */
  email: "",

  photo: {
    src: "/eduardo.jpg",
    alt: "Portrait of Eduardo Maciel",
  },

  /** Mono keyword line under the title. */
  focus: ["Distributed Systems", "Backend", "Infrastructure", "Go", "Rust"],

  /** Chips in the intro. Names must exist in `src/data/tech.ts` to get a logo. */
  stack: [
    "Go",
    "TypeScript",
    "Rust",
    "C++",
    "Python",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Linux",
    "PostgreSQL",
    "Redis",
  ],

  experience: [
    {
      id: "otimiza",
      org: "Otimiza",
      url: "https://otimiza-oficial.github.io/Otimiza/",
      repo: "https://github.com/Otimiza-Oficial/Otimiza",
      start: "2026",
      current: true,
      tags: ["Rust", "Tauri"],
    },
    {
      id: "stackr",
      org: "Stackr",
      url: "https://www.mystackr.lat/pt-br",
      repo: "https://github.com/EduardoxDev/Stackr-CLI",
      start: "2025",
      end: "2025",
      current: false,
      tags: ["Go", "Docker", "CLI"],
    },
  ] as {
    id: "otimiza" | "stackr";
    org: string;
    url: string;
    repo: string;
    start: string;
    end?: string;
    current: boolean;
    tags: string[];
  }[],

  bio: {
    en: [
      "I'm Eduardo Maciel, a software engineer focused on distributed systems, backend engineering and scalable infrastructure.",
      "I've been programming for around five years and I'm currently building Otimiza, a cross-platform performance tool written in Rust.",
      "I'm particularly interested in understanding how large-scale software behaves — from databases and caching to orchestration, networking and distributed architectures.",
    ],
    pt: [
      "Sou Eduardo Maciel, engenheiro de software focado em sistemas distribuídos, engenharia de backend e infraestrutura escalável.",
      "Programo há cerca de cinco anos e atualmente estou construindo o Otimiza, uma ferramenta de desempenho multiplataforma escrita em Rust.",
      "Me interessa especialmente entender como software em larga escala se comporta — de bancos de dados e cache a orquestração, redes e arquiteturas distribuídas.",
    ],
    es: [
      "Soy Eduardo Maciel, ingeniero de software enfocado en sistemas distribuidos, ingeniería de backend e infraestructura escalable.",
      "Llevo unos cinco años programando y actualmente estoy construyendo Otimiza, una herramienta de rendimiento multiplataforma escrita en Rust.",
      "Me interesa especialmente entender cómo se comporta el software a gran escala — desde bases de datos y caché hasta orquestación, redes y arquitecturas distribuidas.",
    ],
  } satisfies Record<Locale, string[]>,

  languages: [
    { name: "Português", level: "native" },
    { name: "Español", level: "fluent" },
    { name: "English", level: "learning" },
  ] as const,
} as const;

export type Profile = typeof profile;
