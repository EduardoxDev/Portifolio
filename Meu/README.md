# Portifolio

Meu portfólio pessoal — Eduardo Maciel, Backend Developer.

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide · Simple Icons

## Rodando

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde fica cada coisa

- `src/data/profile.ts` — dados pessoais: nome, bio (EN/PT/ES), stack, experiência, idiomas, email.
- `src/data/projects.ts` — projetos em destaque (repositórios reais do GitHub).
- `src/data/tech.ts` — logos e cores das tecnologias.
- `src/locales/{en,pt,es}.ts` — todos os textos da interface. `pt` e `es` são tipados a partir do `en`, então uma chave faltando quebra o build.
- `src/lib/github.ts` — busca seguidores, estrelas, repositórios e o gráfico de contribuições (revalida a cada 6 horas; se a API falhar, a seção some sem quebrar a página).
- `src/components/` — seções da página, navbar, rodapé e o menu ⌘K.

## Configuração

- `profile.email` em `src/data/profile.ts` — deixe vazio para esconder os links de email.
- `NEXT_PUBLIC_SITE_URL` — URL pública do site, usada no OpenGraph.
- `GITHUB_TOKEN` (opcional) — aumenta o limite de requisições da API do GitHub no build.

## Licença

MIT
