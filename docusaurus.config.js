const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Firefox Ecosystem Platform',
  tagline: 'Documentation for Firefox Accounts, Sync and more',
  url: 'https://mozilla.github.io',
  baseUrl: '/ecosystem-platform/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/firefox-logo.png',
  organizationName: 'mozilla',
  projectName: 'ecosystem-platform',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mozilla/ecosystem-platform/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Firefox Ecosystem Platform',
        logo: {
          alt: 'Ecosystem Platform Logo',
          src: 'img/firefox-logo.png',
        },
        items: [
          {
            href: "https://github.com/mozilla/ecosystem-platform",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Mozilla Corporation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: 'bf6d9655ef3d5789d97465aff250ee76',
        indexName: 'mozilla_ecosystem-platform',
      },
    }),
});
