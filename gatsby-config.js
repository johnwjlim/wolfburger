module.exports = { 
  siteMetadata: {
    title: 'wolf',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500,600,700,800,900`,
          `Lora\:400,600,700`, `Open Sans\:300,400,500,600,700,400i,500i`
        ]
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
