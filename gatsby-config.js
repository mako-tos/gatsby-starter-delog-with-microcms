/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()
const proxy = require("http-proxy-middleware")
const siteMetadata = require("./site-meta-data.json")
module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  /* Your site config here */
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Delog GatbsyJS Starter`,
        short_name: `Delog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-dark-mode',
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICRO_CMS_API_KEY,
        serviceId: process.env.MICRO_CMS_SERVICE_ID,
        endpoint: process.env.MICRO_CMS_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: siteMetadata.siteUrl // required!
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'report.html'
      },
    },
  ],
}
