module.exports = {
  siteMetadata: {
    title: `RenoInMO on Twitch`,
    description: `Site containing information about the content and work of RenoInMO.`,
    author: `@RenoInMO`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
	},
	{
	  resolve: `gatsby-plugin-google-fonts`,
	  options: {
	    fonts: [
			`fira sans\:400,700,900`,
			`Noticia Text`,
		],
		display: `swap`
	  }
	},
	`gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
