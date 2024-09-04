module.exports = {
  siteMetadata: {
    title: `Mi Blog`,
    author: `Tu Nombre`,
    description: `Un blog increíble con Gatsby`,
    siteUrl: `https://www.ejemplo.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
