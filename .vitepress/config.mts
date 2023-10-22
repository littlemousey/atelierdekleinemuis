import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Atelier de kleine muis",
  description: "Muizenverhalen en creaties door A. de Nijs",
  locales:{
    root: {
      label: 'Dutch',
      lang: 'nl'
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // Github: https://github.com/vuejs/vitepress
    // /src/markdown-examples
    // /src/api-examples

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Verhalen', link: '/src/verhalen-van-de-muis/' }
    ],

    sidebar: [
      { text: 'Verhalen van de muis',
        items: [
          { text: 'Wegwijzer', link: '/src/verhalen-van-de-muis/' },
          { text: 'De molenaar van Maarssen', link: '/src/verhalen-van-de-muis/molenaar-van-maarssen' },
          { text: 'Ontbijt voor molenaars', link: '/src/verhalen-van-de-muis/ontbijt-voor-molenaars' },
          { text: 'Woningnoot', link: '/src/verhalen-van-de-muis/woningnoot' },
          { text: 'Burenruzie', link: '/src/verhalen-van-de-muis/burenruzie' },
        ]
      },
      { text: 'Wall of fame', link: '/src/about-author/wall-of-famous-mice' },
      { text: 'Over auteur', items: [
        { text: 'Auteur', link: '/src/about-author/' },
      ]},
      { text: 'Copyright', link: '/src/verhalen-van-de-muis/copyright' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/littlemousey' }
    ],
    footer: {
      copyright: 'Copyright © sinds 2023 A.N.S. de Nijs'
    }
  }
})
