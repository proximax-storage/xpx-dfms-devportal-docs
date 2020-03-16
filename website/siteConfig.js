/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  docsSideNavCollapsible: true,

  title: 'Storage DFMS', // Title for your website.
  tagline: 'Create your applications using Data File Management System as a backbone',
  url: 'https://proximax-storage.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'xpx-dfms-devportal-docs',
  organizationName: 'proximax-storage',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting_started/what_is', label: 'Getting Started'},
    {doc: 'cli/dfms/dfms', label: 'CLI'},
    {doc: 'guides/contract/compose', label: 'Guides'},
    { page: 'endpoints', label: 'API Endpoints' },
    {page: 'help', label: 'Help'}
    // {blog: true, label: 'Blog'},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo-proximax.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#1fb4ac',
    secondaryColor: '#f06623',
  },

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900"
  ],

  fonts: {
    myFont: [
      "-apple-system",
      "system-ui"
    ],
    myOtherFont: [
      "Lato"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} ProximaX`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
