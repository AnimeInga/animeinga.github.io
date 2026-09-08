/**
 * Pós-build: reescreve URLs absolutas (/sobre/, /img/..., /_astro/...)
 * como relativas, para que o site funcione servido de qualquer
 * subdiretório (previews, homologação) sem configurar `base`.
 *
 * Roda automaticamente após `npm run build`.
 */
import {readdirSync, readFileSync, writeFileSync, statSync} from 'node:fs';
import {join, relative, dirname} from 'node:path';

const dist = new URL('../dist', import.meta.url).pathname;

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else if (full.endsWith('.html')) yield full;
  }
}

let rewritten = 0;

for (const file of walk(dist)) {
  // Prefixo relativo da página até a raiz do site ('./' na home, '../' nas internas).
  const depth = relative(dist, dirname(file));
  const prefix = depth ? depth.split('/').map(() => '..').join('/') + '/' : './';

  let html = readFileSync(file, 'utf8');
  const before = html;

  // href="/" ou src="/" → raiz relativa
  html = html.replace(/(href|src)="\/"/g, `$1="${prefix}"`);
  // href="/algo" ou src="/algo" → relativo
  html = html.replace(/(href|src)="\/(?!\/)/g, `$1="${prefix}`);

  if (html !== before) {
    writeFileSync(file, html);
    rewritten++;
  }
}

console.log(`[relative-paths] ${rewritten} arquivo(s) HTML ajustados.`);

// ---- Sitemap (URLs absolutas de produção) ----
const BASE = 'https://animeinga.com.br';
const pages = [...walk(dist)].map((file) => {
  const rel = relative(dist, file).replaceAll('\\', '/');
  return rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '');
});

// Data no fuso do evento (evita lastmod no futuro em builds locais noturnas).
const today = new Date().toLocaleDateString('en-CA', {timeZone: 'America/Sao_Paulo'});
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(dist, 'sitemap.xml'), sitemap);
console.log(`[sitemap] ${pages.length} página(s) em sitemap.xml`);
