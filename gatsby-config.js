module.exports = {
  siteMetadata: {
    title: `Brendan Goodenough`,
    description: `My personal blog where I speak my mind.`,
    author: `Brendan Goodenough`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-external-links`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-figure-caption`,
            options: {
              figureClassName: 'md-figure',
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brendan Goodenough`,
        short_name: `Brendan Goodenough`,
        start_url: `/`,
        background_color: `#40bba6`,
        theme_color: `#40bba6`,
        display: `minimal-ui`,
        icon: `src/images/goodenough-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
