module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-69494366-1`,
      },
    },
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: true,
        // source directory
        contentPath: "content/decks",
        // base path for routes generate by this theme
        basePath: "/decks",
      },
    },
    `@pauliescanlon/gatsby-mdx-embed`,
    `gatsby-theme-blog`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Nerd Ramblings`,
    author: `Kyle Rubenok`,
    description: `Written by Kyle Rubenok a Computer Science student studying at McGill University. Previously President at McGill CSUS, Co-Director at HackMcGill and Founding Partner at Penguinleaf. Incoming PM at Microsoft. You should follow him on Twitter`,
    menuLinks: [
      {
        name: `Blog`,
        url: `/`,
      },
      {
        name: `About`,
        url: `/about`,
      },
    ],
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/krubenok`,
      },
      {
        name: `Github`,
        url: `https://github.com/krubenok`,
      },
      {
        name: `LinkedIn`,
        url: `https://linkedin.com/in/krubenok`,
      },
    ],
  },
}
