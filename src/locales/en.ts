export const en = {
  nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact", language: "Language" },
  intro: {
    building: "Building",
    localTime: "local time",
    born: "Born in Brazil",
  },
  stats: {
    age: "Years old",
    years: "Years coding",
    repos: "Repositories",
    stars: "Stars",
    contributions: "Contributions",
  },
  about: {
    title: "About",
    languages: "Languages",
    levels: { native: "Native", fluent: "Fluent", learning: "Learning · Wizard" },
  },
  experience: {
    title: "Experience",
    present: "Present",
    current: "Current",
    items: {
      nexus: {
        role: "Founder",
        subtitle: "Nexus · Local MCP server for Claude Code",
        summary:
          "Founded and build Nexus, a local MCP server that indexes your repositories and gives AI agents the right code, the exact line and the team's decisions.",
        points: [
          "14 MCP tools for agents: code search, context packs for a task and persistent memory of confirmed decisions",
          "Code stays on the machine — the index and memory live in a local file and secrets like .env and keys are ignored",
          "Desktop app and Windows installer, open source under the MIT license",
        ],
      },
      otimiza: {
        role: "Otimiza",
        subtitle: "Cross-platform performance tool",
        summary:
          "Building a performance optimization system for Windows, Linux and macOS, written in Rust on top of Tauri.",
        points: [
          "Measures what the machine is actually doing",
          "Optimizes what can be optimized",
          "Proves every change with numbers — including when the number says nothing changed",
        ],
      },
      stackr: {
        role: "Backend Developer",
        subtitle: "Stackr · Cloud platform",
        summary:
          "Backend work on a cloud platform that hosts bots, sites, APIs and databases in high-performance containers, with real-time metrics and logs.",
        points: [
          "Built the official Stackr CLI in Go — deploy, manage apps and follow logs straight from the terminal",
          "Worked on the backend behind container deploys, metrics and logs",
        ],
      },
    },
  },
  openSource: {
    title: "Open Source",
    subtitle: "Systems I've built to understand how infrastructure behaves.",
    followers: "Followers",
    stars: "Total Stars",
    repositories: "Repositories",
    topLanguages: "Top Languages",
    graph: "Contribution Graph",
    total: "contributions in the last year",
    less: "Less",
    more: "More",
    source: "Source",
    demo: "Demo",
    all: "All repositories",
    projects: {
      nexus: "Local MCP server for Claude Code that indexes your repositories and hands the agent the right code, exact line and team decisions. I'm the founder.",
      relayguard: "High-availability webhook delivery with retry strategies and async processing queues.",
      postgresOperator: "Kubernetes operator that manages PostgreSQL instances declaratively.",
      httpStorm: "Asynchronous HTTP/1.1 server in C++20 on Linux epoll, with TLS 1.3 and middleware.",
      sentinel: "Low-latency stream processing engine that flags suspicious transactions in milliseconds.",
      logstream: "Log ingestion and search engine that turns unstructured streams into searchable data.",
      miniRuntime: "A minimal container runtime built on Linux namespaces and cgroups.",
    },
  },
  contact: {
    title: "Contact",
    text: "Open to conversations about infrastructure, backend and distributed systems.",
  },
  footer: { built: "Built with Next.js", top: "Back to top" },
  menu: {
    open: "Open command menu",
    placeholder: "Type a command or search…",
    empty: "No results.",
    navigation: "Navigation",
    links: "Links",
    language: "Language",
    top: "Go to top",
  },
};

export type Dictionary = typeof en;
