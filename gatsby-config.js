module.exports = {
  siteMetadata: {
    title: `Huddle landing page`,
    description: `Single section landing page. Cool svgs. Modern colors. Let's rock!`,
    author: `Kuba Chrapek @kuba.chrapek`,
  },
  pathPrefix: "/huddle-landing-page",
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
        name: `Huddle Landing Page`,
        short_name: `Huddle`,
        start_url: `/`,
        background_color: `#6648B1`,
        theme_color: `#6648B1`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
