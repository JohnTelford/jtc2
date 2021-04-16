const path = require('path')

module.exports = {
  siteMetadata: {
    // title: 'Gatsby Starter MDX Basic',
    title : 'Web Technology Consulting',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@chrisbiscardi',
      menuLinks:[
        {
          name : 'Home',
          link : '/'
        },

        {
          name : 'Technology',
          link : '/technology'
        },

        {
          name : 'About',
          link : '/about'
        },
      ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: '@stackbit/gatsby-plugin-menus',
      options: {
        // static definition of menu items (optional)
        menus: {
          main: // identifier of menu container
            [ // array of contained children menu items
              {
                identifier: 'myId', // identifier for this item (optional)
                title: 'Title for page',
                url: '/page-1/',
                weight: 1
              }
            ]
        },
        // Gatsby node types from which we extract menus (optional, see "Advanced usage")
        sourceNodeType: 'MarkdownRemark', 
        // the relative node path where we can find the 'menus' container (optional)
        sourceDataPath: 'frontmatter',
        // the relative node path where we can find the page's URL (required)
        sourceUrlPath: 'fields.url',
        // custom menu loading function (optional)
        // menuLoader: customLoaderFunction,
        // the property to use for injecting to the page context (optional, see "Advanced usage")
        pageContextProperty: 'menus', 
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],

}
