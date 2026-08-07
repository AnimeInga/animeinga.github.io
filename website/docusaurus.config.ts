import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AnimeIngá',
  tagline: 'O maior evento de Cultura Japonesa de Maringá',
  favicon: 'img/favicon.png',

  url: 'https://animeinga.com.br',
  baseUrl: '/',

  organizationName: 'animeinga',
  projectName: 'animeinga.github.io',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-T66DNTG6',
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'AnimeIngá',
      logo: {
        alt: 'AnimeIngá Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          href: 'https://forms.gle/p3M4Fd5TgF3vyFxU7',
          label: 'Seja Expositor',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Redes Sociais',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/animeinga',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@animeinga',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/71895986/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/animeinga',
            },
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'contato@animeinga.com.br',
              href: 'mailto:contato@animeinga.com.br',
            },
          ],
        },
      ],
      copyright: `AnimeIngá &copy; Copyright - ${new Date().getFullYear()} - Todos os direitos reservados - CNPJ 19.076.380/0001-76`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
