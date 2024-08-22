// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spotflow Documentation',
  tagline: 'The official Spotflow Documentation',
  favicon: 'img/sf-favicon-white.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'joachimmmm', // Usually your GitHub org/user name.
  projectName: 'spotflow-documentation', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./docsidebar.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./node_modules/modern-normalize/modern-normalize.css')
          ],
        },
      }),
    ],
  ],
  plugins: [
    function myPlugin(context, options) {
      return {
        name: 'docusaurus-plugin-sass',
        configureWebpack(config, isServer, utils) {
          return {
            module: {
              rules: [
                {
                  test: /\.(scss|sass)$/,
                  use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                  ],
                  include: path.resolve(__dirname, 'src'),
                },
              ],
            },
          };
        },
      };
    },
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        searchBarPosition: "left",
        searchBarShortcut: false,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: ['/', 'api'],
        language: ['en']
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: './apisidebar.js',
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://res.cloudinary.com/dbrh0uxwx/image/upload/v1719325096/new%20assets/gb0ghehgthoijo2zv4xk.png',
      navbar: {
        title: '',
        logo: {
          alt: 'sf-logo',
          src: 'https://res.cloudinary.com/dbrh0uxwx/image/upload/v1719325096/new%20assets/gb0ghehgthoijo2zv4xk.png',
          srcDark: 'https://res.cloudinary.com/dbrh0uxwx/image/upload/v1721731258/new%20assets/wilwyaeqmofccvsm7fnm.png',
          className: "doclogo",
          // width: 139,
          height: 28,
        },
        hideOnScroll:true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs'
          },
          {to: '/api/intro', label: 'APIs', position: 'left'},
          {
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            items:[
              {
                label: 'Facebook',
                href: 'https://facebook.com',
              },
              {
                label: "Twitter",
                href: 'https://twitter.com'
              }
            ]
          }
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      colorMode: {
        disableSwitch: false
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      blog: false,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
