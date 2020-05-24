import React from "react";
import { graphql } from "gatsby";
import BlogBody from "../components/BlogBody"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const { microcmsBlog } = data; // data.markdownRemark holds your post data
  return (
    <BlogBody data={microcmsBlog} location={location} />
  );
}

export const pageQuery = graphql`
  query($blogId: String!) {
    microcmsBlog(blogId: { eq: $blogId }) {
      title
      createdAt(formatString: "YYYY-MM-DD")
      updatedAt(formatString: "YYYY-MM-DD")
      html
      path
      thumbnail {
        url
      }
    }
  }
`;
