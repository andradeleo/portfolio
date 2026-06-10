# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Idioma:** documentação, CLAUDE.md e comunicação no chat em português (pt-br). Código, nomes de variáveis/funções, comentários no código, commits e identificadores em inglês (en).

## Comandos

```bash
npm run dev              # servidor de dev (Vite)
npm run build            # tsc -b && vite build (type-check + build de produção)
npm run preview          # serve o build de dist/

npm run eslint:check     # lint
npm run eslint:write     # lint + autofix
npm run prettier:check   # checa formatação
npm run prettier:write   # formata

npm run commit           # commitizen (cz) — fluxo guiado de commit
```

Não há suíte de testes neste projeto.

## Arquitetura

Portfólio single-page (sem rotas, sem backend). `App.tsx` empilha as seções em ordem fixa: `Header → Hero → About → Timeline → Blocks`. Cada seção é um componente em `src/components/`. Conteúdo (timeline, blocks) é hardcoded em arrays tipados dentro do próprio componente — não vem de CMS/API.

`main.tsx` envolve a app no `ReactLenis` (scroll suave via `lenis`). Dark mode é fixo: classe `dark` no `<html>` (index.html), não há toggle.

### Animação
Toda animação usa `motion` (Framer Motion):
- `SplitText.tsx` — quebra texto em chars, entrada com stagger via `animate`/`stagger`; chars se espalham seguindo velocidade do ponteiro (listener `pointermove`).
- `RevealLink.tsx` — links com efeito de troca vertical no hover via `variants`.
- `PixelatedImage.tsx` — filtro SVG (`feMorphology`/`feTile`) aplicado no hover via CSS var `--pixel-filter`.

### Estilo
Tailwind v4 (config CSS-first, sem `tailwind.config.js`). Tudo vive em `src/index.css`:
- `@theme inline` define tokens (fontes, radius, cores via vars).
- Variáveis de cor (`--background`, `--foreground`, etc.) em `:root`/`.dark` no formato oklch.
- Fonte: **Sora** (`@fontsource-variable/sora`) para heading e sans.

### shadcn/ui
`components.json` configurado (style `radix-nova`, baseColor `zinc`, ícones `lucide`). Componentes gerados pelo CLI caem em `src/components/ui/` e a CLI espera o helper `cn` em `src/lib/utils.ts` (`clsx` + `tailwind-merge`). **Ambos os diretórios podem não existir** se nenhum componente shadcn estiver em uso no momento — a CLI os recria ao adicionar um componente. O ESLint ignora `src/components/ui/**` (código gerado).

## Convenções

- Alias `@/` → `src/` (configurado em `vite.config.ts` e `tsconfig.app.json`).
- TypeScript estrito: `verbatimModuleSyntax` + `erasableSyntaxOnly` ligados → use **inline type imports** (`import { type Foo }`); o ESLint autofix força isso.
- `eqeqeq` obrigatório; promises flutuantes são erro; `console.log` é warn (só `warn`/`error` liberados).
- Commits seguem **Conventional Commits** (commitlint + husky no `commit-msg`). Use `npm run commit` ou siga o formato `tipo: descrição`.
