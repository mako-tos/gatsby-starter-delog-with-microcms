import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";

const BlogBody = ({location, data}) => (
  <Layout>
    <SEO
      pathname={location.pathname}
      title={data.title}
      image={data.thumbnail && data.thumbnail.url}
      description={data.html}
      article
    />
    <div className="blog-post-container">
      <article className="post">
        {!data.thumbnail && (
          <div className="post-thumbnail">
            <h1 className="post-title">{data.title}</h1>
            <div className="post-meta">{data.updatedAt || data.createdAt}</div>
          </div>
        )}
        {!!data.thumbnail && (
          <div
            className="post-thumbnail"
            style={{ backgroundImage: `url(${data.thumbnail.url})` }}
          >
            <h1 className="post-title">{data.title}</h1>
            <div className="post-meta">{data.updatedAt || data.createdAt}</div>
          </div>
        )}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
      </article>
    </div>
  </Layout>
)

export default BlogBody
