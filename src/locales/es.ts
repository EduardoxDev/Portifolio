import type { Dictionary } from "./en";

export const es: Dictionary = {
  nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", contact: "Contacto", language: "Idioma" },
  intro: {
    building: "Construyendo",
    localTime: "hora local",
    born: "Nacido en Brasil",
  },
  stats: {
    age: "Años de edad",
    years: "Años programando",
    repos: "Repositorios",
    stars: "Estrellas",
    contributions: "Contribuciones",
  },
  about: {
    title: "Sobre mí",
    languages: "Idiomas",
    levels: { native: "Nativo", fluent: "Fluido", learning: "Aprendiendo · Wizard" },
  },
  experience: {
    title: "Experiencia",
    present: "Actual",
    current: "Ahora",
    items: {
      otimiza: {
        role: "Otimiza",
        subtitle: "Herramienta de rendimiento multiplataforma",
        summary:
          "Construyendo un sistema de optimización de rendimiento para Windows, Linux y macOS, escrito en Rust con Tauri.",
        points: [
          "Mide lo que la máquina realmente está haciendo",
          "Optimiza lo que se puede optimizar",
          "Demuestra cada cambio con números — incluso cuando el número dice que nada cambió",
        ],
      },
      stackr: {
        role: "Backend Developer",
        subtitle: "Stackr · Plataforma cloud",
        summary:
          "Backend de una plataforma cloud que aloja bots, sitios, APIs y bases de datos en contenedores de alto rendimiento, con métricas y logs en tiempo real.",
        points: [
          "Construí la CLI oficial de Stackr en Go — deploy, gestión de apps y logs directo desde la terminal",
          "Trabajé en el backend detrás de los deploys de contenedores, métricas y logs",
        ],
      },
    },
  },
  openSource: {
    title: "Open Source",
    subtitle: "Sistemas que construí para entender cómo se comporta la infraestructura.",
    followers: "Seguidores",
    stars: "Estrellas",
    repositories: "Repositorios",
    topLanguages: "Lenguajes principales",
    graph: "Gráfico de contribuciones",
    total: "contribuciones en el último año",
    less: "Menos",
    more: "Más",
    source: "Código",
    demo: "Demo",
    all: "Todos los repositorios",
    projects: {
      relayguard: "Entrega de webhooks de alta disponibilidad con reintentos y colas asíncronas.",
      postgresOperator: "Operador de Kubernetes que gestiona instancias de PostgreSQL de forma declarativa.",
      httpStorm: "Servidor HTTP/1.1 asíncrono en C++20 sobre epoll de Linux, con TLS 1.3 y middlewares.",
      sentinel: "Motor de procesamiento de streams de baja latencia que detecta transacciones sospechosas en milisegundos.",
      logstream: "Motor de ingesta y búsqueda de logs que convierte streams no estructurados en datos consultables.",
      miniRuntime: "Un runtime de contenedores mínimo usando namespaces y cgroups de Linux.",
    },
  },
  contact: {
    title: "Contacto",
    text: "Abierto a conversar sobre infraestructura, backend y sistemas distribuidos.",
  },
  footer: { built: "Hecho con Next.js", top: "Volver arriba" },
  menu: {
    open: "Abrir menú de comandos",
    placeholder: "Escribe un comando o busca…",
    empty: "Sin resultados.",
    navigation: "Navegación",
    links: "Enlaces",
    language: "Idioma",
    top: "Ir arriba",
  },
};
