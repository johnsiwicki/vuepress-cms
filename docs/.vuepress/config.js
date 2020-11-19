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
        text: 'Design',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Page Components', link: '/design/page-components/' },
          { text: 'In Page Components', link: '/design/inpage-components/' }
        ]
      },
    ],
    sidebar: ["/_pages/guide"],
  },
};
