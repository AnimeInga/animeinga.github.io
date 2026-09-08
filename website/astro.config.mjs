// @ts-check
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://animeinga.com.br',
  output: 'static',
  build: {
    // 'file' gera sobre.html, equipe.html... (compatível com qualquer
    // servidor estático, incluindo previews que não resolvem diretórios).
    format: 'file',
  },
});
