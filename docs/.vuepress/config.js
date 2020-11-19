module.exports = {
  title: "VuePress template",
  description:
    "A JAMstack website template with the default VuePress theme and Netlify CMS config.",
  //   base: "/VuePress-with-Netlify-CMS/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: 'Components',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Page Components', link: '/components/page-components/' },
          { text: 'In Page Components', link: '/components/inpage-components/' }
        ]
      },
    ],
    sidebar: ["/_pages/guide"],
  },
};
