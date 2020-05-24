import React from "react"
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import { html2description } from '../utils'

const SEO = ({ title, html, image, pathname, article }) => {
  const data = useStaticQuery(pageQuery)
  const siteData = data.site.siteMetadata
  const realTitle = title === siteData.title ? title : `${title} | ${siteData.title}`
  const seo = {
    description: html2description(html) || siteData.description,
    path: `${siteData.siteUrl}${pathname}`,
    title: realTitle,
    image: image,
    twitter: siteData.twitter,
    shortName: siteData.shortName
  }
  return (
    <Helmet>
      <html lang={siteData.language} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="apple-mobile-web-app-title" content={seo.shortName} />
      <meta name="application-name" content={seo.shortName} />

      {/* OpenGraph  */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {pathname === '/' &&
        <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      }
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  html: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  html: null,
  image: null,
  pathname: null,
  article: false,
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        twitter
        shortName
        language
      }
    }
  }
`