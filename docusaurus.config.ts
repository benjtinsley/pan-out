import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pan Out',
  tagline: 'The CU student-led initiative to strike it rich',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://panout.guide',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'benjtinsley', // Usually your GitHub org/user name.
  projectName: 'pan-out', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/pan-out-card.png',
    announcementBar: {
      id: 'register_2024',
      content:
        'Registration open for Pan Out 2024. Go to the #register channel in the Pan Out discord server for more information.',
      backgroundColor: '#303846',
      textColor: '#7dccc2',
      isCloseable: false,
    },
    navbar: {
      title: 'Pan Out 2024',
      logo: {
        alt: '',
        srcDark: 'img/gold-bar-dark.svg',
        src: 'img/gold-bar-light.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          label: 'Guide',
        },
        {to: 'blog', label: 'Blog'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Pan Out`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
