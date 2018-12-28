import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './styles.css'

const BlogPost = ({ post }) => (
  <article className="blog-post">
    <h1 className="blog-post-title">{post.frontmatter.title}</h1>
    <small className="blog-post-date">{post.frontmatter.date}</small>
    <div
      class="blog-post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  </article>
)

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
}

export default BlogPost
