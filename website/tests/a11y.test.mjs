/**
 * Testes de acessibilidade estática sobre o HTML gerado em dist/.
 * Rode `npm run build` antes (o script `npm test` já faz isso).
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readdirSync, readFileSync, existsSync} from 'node:fs';
import {join} from 'node:path';

const dist = new URL('../dist', import.meta.url).pathname;
const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

assert.ok(existsSync(dist), 'dist/ não existe: rode `npm run build` primeiro');

const pages = readdirSync(dist)
  .filter((f) => f.endsWith('.html'))
  .map((f) => ({name: f, html: readFileSync(join(dist, f), 'utf8')}));

const tags = (html, re) => [...html.matchAll(re)].map((m) => m[0]);

test('há páginas geradas', () => assert.ok(pages.length >= 10));

for (const {name, html} of pages) {
  test(`${name}: lang, título e viewport`, () => {
    assert.match(html, /<html[^>]*lang="pt-BR"/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<meta name="viewport"/);
  });

  test(`${name}: skip link é o primeiro foco e aponta para o main`, () => {
    const body = html.slice(html.indexOf('<body'));
    assert.match(body, /^<body[^>]*>\s*<a class="skip-link" href="#conteudo"/);
    assert.match(html, /<main id="conteudo"/);
  });

  test(`${name}: exatamente um h1 e sem níveis de título pulados`, () => {
    const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
    assert.equal(levels.filter((l) => l === 1).length, 1, 'deve haver um único h1');
    levels.reduce((prev, cur) => {
      assert.ok(cur <= prev + 1, `nível de título pulado: h${prev} -> h${cur}`);
      return cur;
    }, 0);
  });

  test(`${name}: landmarks`, () => {
    for (const tag of ['header', 'nav', 'main', 'footer']) {
      assert.match(html, new RegExp(`<${tag}[\\s>]`), `faltou <${tag}>`);
    }
  });

  test(`${name}: imagens têm alt`, () => {
    for (const img of tags(html, /<img\b[^>]*>/g)) {
      assert.match(img, /\balt=/, `img sem alt: ${img}`);
    }
  });

  test(`${name}: botões têm nome acessível`, () => {
    for (const m of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
      const text = m[2].replace(/<span[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/span>/g, '').replace(/<[^>]+>/g, '').trim();
      assert.ok(/aria-label="[^"]+"/.test(m[1]) || text, `botão sem nome: ${m[0]}`);
    }
  });

  test(`${name}: links têm nome e _blank usa noopener`, () => {
    for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
      const text = m[2].replace(/<[^>]+>/g, '').trim();
      const hasImgAlt = /<img[^>]*alt="[^"]+"/.test(m[2]);
      assert.ok(/aria-label="[^"]+"/.test(m[1]) || text || hasImgAlt, `link sem nome: ${m[0]}`);
      if (/target="_blank"/.test(m[1])) assert.match(m[1], /rel="[^"]*noopener/);
    }
  });

  test(`${name}: ids únicos`, () => {
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, 'ids duplicados');
  });

  test(`${name}: menu mobile expõe estado`, () => {
    assert.match(html, /<button[^>]*aria-expanded="false"[^>]*data-nav-toggle/);
    assert.match(html, /<nav[^>]*aria-label="[^"]+"/);
  });
}

test('página atual marcada com aria-current', () => {
  const sobre = pages.find((p) => p.name === 'sobre.html');
  assert.match(sobre.html, /href="sobre\.html"[^>]*aria-current="page"|aria-current="page"[^>]*href="sobre\.html"/);
});

test('CSS: foco visível e movimento reduzido preservados', () => {
  assert.match(css, /:focus-visible\s*\{[^}]*outline:\s*2px solid/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(css.replace(/main:focus\s*\{[^}]*\}/, ''), /outline:\s*(none|0)\b/);
});

test('CSS: skip link só aparece com foco', () => {
  assert.match(css, /\.skip-link\s*\{[^}]*top:\s*-/);
  assert.match(css, /\.skip-link:focus\s*\{/);
});

test('Layout: Esc fecha o menu e devolve o foco ao botão', () => {
  const layout = readFileSync(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');
  assert.match(layout, /e\.key === 'Escape'/);
  assert.match(layout, /toggle[^;]*\.focus\(\)/);
});

test('Layout: menu fecha quando o foco sai do nav (inclusive com destino nulo)', () => {
  const layout = readFileSync(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');
  assert.match(layout, /closest\('nav'\)/);
  assert.match(layout, /!next \|\| !nav\.contains\(next\)/);
});
