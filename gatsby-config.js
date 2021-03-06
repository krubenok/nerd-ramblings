module.exports = {
  siteMetadata: {
    siteTitle: 'Nerd Ramblings',
    siteTitleAlt: 'Nerd Ramblings by Kyle Rubenok',
    siteHeadline: 'Nerd Ramblings by Kyle Rubenok',
    siteUrl: 'https://nerd-ramblings.com/',
    siteDescription:
      'Written by Kyle Rubenok a Computer Science student studying at McGill University. Previously President at McGill CSUS, Co-Director at HackMcGill and Founding Partner at Penguinleaf. Incoming PM at Microsoft.',
    siteLanguage: 'en',
    siteImage: '/banner.jpg',
    author: 'Kyle Rubenok'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: false,
        // source directory
        contentPath: 'content/decks',
        // base path for routes generate by this theme
        basePath: '/decks'
      }
    },
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      options: {
        showLineNumbers: true,
        feed: true,
        feedTitle: 'Nerd Ramblings by Kyle Rubenok',
        navigation: [
          {
            title: 'Blog',
            slug: '/blog'
          },
          {
            title: 'About',
            slug: '/about'
          },
          {
            title: 'Gear',
            slug: '/gear'
          }
        ],
        externalLinks: [
          {
            name: 'Twitter',
            url: 'https://twitter.com/krubenok'
          },
          {
            name: 'Github',
            url: 'https://github.com/krubenok'
          },
          {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/krubenok'
          }
        ]
      }
    },
    '@pauliescanlon/gatsby-mdx-embed',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nerd Ramblings by Kyle Rubenok',
        short_name: 'Nerd Ramblings',
        description:
          'Written by Kyle Rubenok a Computer Science student studying at McGill University. Previously President at McGill CSUS, Co-Director at HackMcGill and Founding Partner at Penguinleaf. Incoming PM at Microsoft.',
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#a625a4',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`
      }
    }
  ]
}
