# AGENTS.md — AnimeIngá Website

Este documento orienta agentes, colaboradores e futuros mantenedores que trabalharem no site do AnimeIngá.

## Sobre o projeto

O site do AnimeIngá é a página oficial do maior evento de Cultura Japonesa de Maringá.

- **Stack atual**: [Docusaurus 3.10.2](https://docusaurus.io/), React 19, TypeScript, [MUI 9.3](https://mui.com/material-ui/getting-started/usage/) e GitHub Pages.
- **Idioma padrão**: português do Brasil (`pt-BR`).
- **Domínio**: https://animeinga.com.br

## Estrutura de diretórios

```
.
├── archive/2023/          # Conteúdo da edição 2023 (arquivado para consulta)
├── website/               # Código-fonte do site atual
│   ├── src/
│   │   ├── css/           # Estilos globais e variáveis Infima
│   │   ├── pages/         # Páginas React da landing e futuras páginas
│   │   └── theme/         # Sobrescritas de tema (ex: Root.tsx para o ThemeProvider do MUI)
│   ├── static/            # Assets estáticos (logo, favicon, CNAME)
│   ├── docusaurus.config.ts
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

- `static/img/logo.png` — Logo original, otimizada para fundos claros.
- `static/img/logo-dark.png` — Versão com o texto "ANIME" em branco, otimizada para fundos escuros.
- Configure `src` e `srcDark` no `navbar.logo` de `docusaurus.config.ts` para alternar automaticamente entre os modos claro/escuro.

### `website/`

- Todo o desenvolvimento atual acontece aqui.
- A landing page provisória está em `src/pages/index.tsx`.
- Componentes React customizados devem ser criados em `src/components/` quando necessário.
- O `src/theme/Root.tsx` envolve a aplicação com o `ThemeProvider` do MUI.

## Como rodar localmente

Usando o Makefile (recomendado):

```bash
make install   # instala dependências
make start     # inicia o servidor de desenvolvimento
```

Ou diretamente via npm:

```bash
cd website
npm install
npm start
```

O servidor de desenvolvimento iniciará em http://localhost:3000.

## Build e testes

Antes de finalizar qualquer alteração, execute:

```bash
cd website
npm run build
npm run typecheck
```

Ambos os comandos devem passar sem erros.

## Padrões de código

- Usar **TypeScript** para novos componentes.
- Preferir componentes funcionais com hooks.
- Usar MUI para componentes visuais customizados.
- Manter o tema escuro como padrão (`colorMode: dark`).
- Textos do site devem estar em português do Brasil.
- Imagens devem ser otimizadas antes de commitar.

## Adicionando novas páginas

1. Criar o arquivo `.tsx` em `website/src/pages/`.
2. Usar `Layout` do Docusaurus para manter navbar e footer.
3. Importar componentes do MUI quando necessário.
4. Adicionar link no `navbar.items` de `docusaurus.config.ts`, se a página for de navegação principal.

## Adicionando conteúdo ao blog ou docs

Atualmente o blog e a documentação estão desabilitados no preset. Para reabilitar, edite `website/docusaurus.config.ts`:

```ts
docs: {
  sidebarPath: './sidebars.ts',
},
blog: {
  showReadingTime: true,
},
```

## Deploy

O deploy é automático via GitHub Actions:

- Push na branch `main` → publica em `gh-pages` (produção).
- Push na branch `develop` → publica em `gh-pages-develop` (homologação).

O arquivo `website/static/CNAME` garante o domínio customizado `animeinga.com.br`.

## Cuidados importantes

- Não mover, renomear ou deletar `archive/2023/` sem autorização da organização.
- Não subir segredos, tokens ou dados pessoais no repositório.
- Sempre verificar se o build passa antes de abrir PR.

## Contato

- E-mail: contato@animeinga.com.br
- Instagram: https://instagram.com/animeinga
- GitHub: https://github.com/animeinga
