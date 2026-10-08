import type { Dictionary } from "./en";

export const pt: Dictionary = {
  nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", contact: "Contato", language: "Idioma" },
  intro: {
    building: "Construindo",
    localTime: "horário local",
    born: "Nascido no Brasil",
  },
  stats: {
    age: "Anos de idade",
    years: "Anos programando",
    repos: "Repositórios",
    stars: "Estrelas",
    contributions: "Contribuições",
  },
  about: {
    title: "Sobre",
    languages: "Idiomas",
    levels: { native: "Nativo", fluent: "Fluente", learning: "Aprendendo · Wizard" },
  },
  experience: {
    title: "Experiência",
    present: "Atual",
    current: "Agora",
    items: {
      otimiza: {
        role: "Otimiza",
        subtitle: "Ferramenta de desempenho multiplataforma",
        summary:
          "Construindo um sistema de otimização de desempenho para Windows, Linux e macOS, escrito em Rust com Tauri.",
        points: [
          "Mede o que a máquina realmente está fazendo",
          "Otimiza o que dá para otimizar",
          "Prova cada mudança com números — inclusive quando o número diz que nada mudou",
        ],
      },
      stackr: {
        role: "Backend Developer",
        subtitle: "Stackr · Plataforma de cloud",
        summary:
          "Backend de uma plataforma de cloud que hospeda bots, sites, APIs e bancos de dados em containers de alta performance, com métricas e logs em tempo real.",
        points: [
          "Construí a CLI oficial da Stackr em Go — deploy, gerenciamento de apps e logs direto do terminal",
          "Trabalhei no backend por trás dos deploys de containers, métricas e logs",
        ],
      },
    },
  },
  openSource: {
    title: "Open Source",
    subtitle: "Sistemas que construí para entender como a infraestrutura se comporta.",
    followers: "Seguidores",
    stars: "Estrelas",
    repositories: "Repositórios",
    topLanguages: "Principais linguagens",
    graph: "Gráfico de contribuições",
    total: "contribuições no último ano",
    less: "Menos",
    more: "Mais",
    source: "Código",
    demo: "Demo",
    all: "Todos os repositórios",
    projects: {
      relayguard: "Entrega de webhooks com alta disponibilidade, estratégias de retry e filas assíncronas.",
      postgresOperator: "Operator de Kubernetes que gerencia instâncias PostgreSQL de forma declarativa.",
      httpStorm: "Servidor HTTP/1.1 assíncrono em C++20 sobre epoll do Linux, com TLS 1.3 e middlewares.",
      sentinel: "Motor de processamento de streams de baixa latência que detecta transações suspeitas em milissegundos.",
      logstream: "Motor de ingestão e busca de logs que transforma streams não estruturados em dados pesquisáveis.",
      miniRuntime: "Um runtime de containers mínimo usando namespaces e cgroups do Linux.",
    },
  },
  contact: {
    title: "Contato",
    text: "Aberto a conversas sobre infraestrutura, backend e sistemas distribuídos.",
  },
  footer: { built: "Feito com Next.js", top: "Voltar ao topo" },
  menu: {
    open: "Abrir menu de comandos",
    placeholder: "Digite um comando ou pesquise…",
    empty: "Nenhum resultado.",
    navigation: "Navegação",
    links: "Links",
    language: "Idioma",
    top: "Ir para o topo",
  },
};
