import { en, type Dictionary } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const dictionaries: Record<Locale, Dictionary> = { en, pt, es };
export type { Dictionary };
