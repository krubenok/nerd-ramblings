require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteTitle: "Nerd Ramblings",
    siteTitleAlt: "Nerd Ramblings by Kyle Rubenok",
    siteHeadline: "Nerd Ramblings by Kyle Rubenok",
    siteUrl: "https://nerd-ramblings.com/",
    siteDescription:
      "Written by Kyle Rubenok. I'm a PM at Microsoft. Previously McGill CS, President at McGill CSUS, Co-Director at HackMcGill and Founding Partner at Penguinleaf.",
    siteLanguage: "en",
    siteImage: "/banner.jpg",
    author: "Kyle Rubenok",
    trailingSlash: `never`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/krubenok`,
          },
          {
            name: "Github",
            url: "https://github.com/krubenok",
          },
          {
            name: "LinkedIn",
            url: "https://linkedin.com/in/krubenok",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nerd Ramblings by Kyle Rubenok`,
        short_name: `Nerd Ramblings`,
        description: `Written by Kyle Rubenok. I'm a PM at Microsoft. Previously McGill CS, President at McGill CSUS, Co-Director at HackMcGill and Founding Partner at Penguinleaf.`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#a625a4`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`;

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                };
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `Nerd Ramblings - Kyle Rubenok`,
          },
        ],
      },
    },
    `gatsby-plugin-mdx-embed`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
