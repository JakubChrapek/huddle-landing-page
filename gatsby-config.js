module.exports = {
  siteMetadata: {
    title: `Huddle landing page`,
    description: `Single section landing page. Cool svgs. Modern colors. Let's rock!`,
    author: `Kuba Chrapek @kuba.chrapek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00ef8c`,
        theme_color: `#00ef8c`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
