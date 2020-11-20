module.exports = {
  title: "Treehouse Design System",
  description:
    "A JAMstack website template with the default VuePress theme and Netlify CMS config.",
  //   base: "/VuePress-with-Netlify-CMS/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/components/" },
      { text: "Contributing", link: "/components/" },
      { text: "Components", link: "/components/" },
      {
        text: 'Guides',
        ariaLabel: 'Guides',
        items: [
          { text: 'How To Setup A Test', link: '/guides/how-test/' },
          { text: 'New Logo For Existing Site', link: '/guides/new-logo/' },
          { text: 'Setting Up Leads Into CRM', link: '/guides/new-logo/' },
          { text: 'How to make a new inline widget', link: '/guides/new-logo/' },
        ]
      },
       {
        text: 'Design',
        ariaLabel: 'Design',
        items: [
          { text: 'Branding', link: '/guides/how-test/' },
          { text: 'Colors', link: '/guides/new-logo/' }
        ]
      },
      {
        text: 'Development',
        ariaLabel: 'Development',
        items: [
          { text: 'Browser Support', link: '/guides/how-test/' },
          { text: 'Supported Plugins', link: '/guides/new-logo/' }
        ]
      }
    ],
    sidebar: ["/_pages/guide"],
  },
};
