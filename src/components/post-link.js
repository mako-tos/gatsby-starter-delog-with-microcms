import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={`${post.createdAt}-${post.path}`}>
      {!!post.thumbnail && (
        <img src={post.thumbnail.url} alt={post.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={`${post.createdAt}-${post.path}`} className="post-link">
          {post.title}
        </Link>
      </h2>
      <div className="post-meta">{post.updatedAt || post.createdAt}</div>
    </header>
  </article>
)
export default PostLink
