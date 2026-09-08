# AnimeIngá

Repositório do site oficial do **AnimeIngá** — o maior evento de cultura pop e japonesa de Maringá.

O site é construído com [Astro 5](https://astro.build/) (site 100% estático, sem backend) e publicado no GitHub Pages.

## Estrutura

- `website/` — Código-fonte do site (Astro).
  - `src/data/*.json` — **Todo o conteúdo editável** (datas, local, história, equipe, competições, comercial). Cada arquivo traz instruções no campo `_leia-me`.
  - `src/pages/` — Páginas do site.
  - `src/components/` — Componentes interativos (contagem regressiva, pétalas de sakura, marquee).
  - `src/layouts/` — Layout base com SEO completo (Open Graph, Twitter Card, JSON-LD).
  - `public/` — Assets estáticos (logo, ícones, `CNAME`, `robots.txt`, manifest).
- `archive/2023/` — Conteúdo da edição 2023 (arquivado para consulta).

## Editando o conteúdo

A maioria das alterações **não exige mexer em código** — basta editar os JSONs em `website/src/data/`:

| Arquivo | O que controla |
| --- | --- |
| `site.json` | Datas, local, redes sociais, formulários |
| `about.json` | História, vídeo, atrações |
| `team.json` | Membros da equipe |
| `competitions.json` | Competições, regulamentos e inscrições |
| `commercial.json` | Espaço comercial (stands, parcerias, Artist Alley) |

Quando um regulamento ou formulário de inscrição for publicado, basta preencher o campo de URL correspondente e o botão é ativado automaticamente.

## Desenvolvimento

```bash
cd website
npm install
npm run dev    # http://localhost:4321
```

## Build

```bash
cd website
npm run build  # gera website/dist + sitemap.xml
```

## Deploy

O deploy é automático via GitHub Actions:

- Push na branch `main` → publica em `gh-pages` (produção → https://animeinga.com.br).
- Push na branch `develop` → publica em `gh-pages-develop` (homologação).

O arquivo `website/public/CNAME` garante o domínio customizado `animeinga.com.br`.
