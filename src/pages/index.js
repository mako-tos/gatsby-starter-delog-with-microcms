import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";
import PropTypes from "prop-types";
import SEO from "../components/SEO";

const IndexPage = ({
  data: {
    site,
    allMicrocmsBlog: { edges },
  },
  location,
}) => {
  const Posts = edges
    .map((edge) => <PostLink key={edge.node.blogId} post={edge.node} />);

  return (
    <Layout>
      <SEO
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
        pathname={location.pathname}
      />
      <HeroHeader />
      <h2>Blog 一覧 &darr;</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    }),
    allMicrocmsBlog: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            blogId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            thumbnail: PropTypes.shape({
              url: PropTypes.string,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMicrocmsBlog(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          blogId
          title
          createdAt(formatString: "YYYY-MM-DD")
          updatedAt(formatString: "YYYY-MM-DD")
          path
          thumbnail {
            url
          }
        }
      }
    }
  }
`;
