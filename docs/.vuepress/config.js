module.exports = {
  title: "VuePress template",
  description:
    "A JAMstack website template with the default VuePress theme and Netlify CMS config.",
  //   base: "/VuePress-with-Netlify-CMS/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/" },
      {
        text: 'Guides',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'How To Setup A Test', link: '/guides/page-components/' },
          { text: 'How To Setup Google Tag Manager', link: '/guides/inpage-components/' }
        ]
      },
    ],
    sidebar: ["/_pages/guide"],
  },
};
