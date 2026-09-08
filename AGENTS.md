# AGENTS.md — AnimeIngá Website

Este documento orienta agentes, colaboradores e futuros mantenedores que trabalharem no site do AnimeIngá.

## Sobre o projeto

O site do AnimeIngá é a página oficial do maior evento de cultura pop e japonesa de Maringá.

- **Stack atual**: [Astro 5](https://astro.build/) (site estático, zero JavaScript por padrão, ilhas de interatividade via scripts inline) e GitHub Pages.
- **Idioma padrão**: português do Brasil (`pt-BR`).
- **Domínio**: https://animeinga.com.br

## Estrutura de diretórios

```
.
├── archive/2023/          # Conteúdo da edição 2023 (arquivado para consulta)
├── website/               # Código-fonte do site atual (Astro)
│   ├── src/
│   │   ├── data/          # TODO o conteúdo editável (JSONs com campo _leia-me)
│   │   ├── pages/         # Páginas (.astro) — index, sobre, equipe, regulamentos, comercial
│   │   ├── components/    # Countdown, Marquee, SakuraFall
│   │   ├── layouts/       # Layout.astro (head com SEO completo)
│   │   └── styles/        # global.css (design system: variáveis CSS)
│   ├── public/            # Assets estáticos (logo, ícones, og-image, CNAME, robots.txt)
│   ├── scripts/           # relative-paths.mjs (pós-build: caminhos relativos + sitemap)
│   ├── astro.config.mjs
│   └── package.json
├── .github/workflows/     # Workflows de CI/CD
├── README.md
└── AGENTS.md              # Este arquivo
```

### `archive/2023/`

- Apenas **conteúdo** da edição 2023 (textos, imagens, vídeos, PDFs).
- Não deve ser alterado, exceto para correções pontuais de arquivo corrompido.
- Não publicar este diretório no site.

### Assets de logo

- `public/img/logo.png` — Logo original, otimizada para fundos claros.
- `public/img/logo-dark.png` — Versão com o texto "ANIME" em branco, usada no tema escuro do site.
- `public/img/og-image.png` — Imagem de compartilhamento (Open Graph, 1200×630).

### `website/src/data/`

- **Toda edição de conteúdo rotineira acontece aqui**, sem tocar em código.
- Cada JSON possui um campo `_leia-me` com instruções específicas.
- URLs vazias em `competitions.json` mantêm os botões desabilitados com a faixa "EM BREVE"; ao preencher a URL, o botão é ativado automaticamente.

## Como rodar localmente

Usando o Makefile (recomendado):

```bash
make install   # instala dependências
make dev       # inicia o servidor de desenvolvimento
```

Ou diretamente via npm:

```bash
cd website
npm install
npm run dev
```

O servidor de desenvolvimento iniciará em http://localhost:4321.

## Build e testes

Antes de finalizar qualquer alteração, execute:

```bash
cd website
npm run build
```

O build deve passar sem erros e gera `website/dist/` (incluindo `sitemap.xml`).

## Padrões de código

- Componentes e páginas em **Astro**; interatividade via `<script>` inline no próprio componente (sem framework JS no cliente).
- Respeitar `prefers-reduced-motion` em qualquer animação.
- Manter o tema escuro como padrão (variáveis em `src/styles/global.css`).
- Textos do site devem estar em português do Brasil.
- Imagens devem ser otimizadas antes de commitar.
- Links internos usam formato de arquivo (`sobre.html`, `equipe.html`...), pois o build usa `format: 'file'`.

## Adicionando novas páginas

1. Criar o arquivo `.astro` em `website/src/pages/`.
2. Usar o `Layout` (`src/layouts/Layout.astro`) para manter navbar, footer e SEO.
3. Adicionar o link no array `navItems` do `Layout.astro`, se a página for de navegação principal.

## Deploy

O deploy é automático via GitHub Actions:

- Push na branch `main` → publica em `gh-pages` (produção).
- Push na branch `develop` → publica em `gh-pages-develop` (homologação).

O arquivo `website/public/CNAME` garante o domínio customizado `animeinga.com.br`.

## Cuidados importantes

- Não mover, renomear ou deletar `archive/2023/` sem autorização da organização.
- Não subir segredos, tokens ou dados pessoais no repositório.
- Sempre verificar se o build passa antes de abrir PR.

## Contato

- E-mail: contato@animeinga.com.br
- Instagram: https://instagram.com/animeinga
- GitHub: https://github.com/animeinga
