import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './styles.css'

const BlogPostPreview = ({ post }) => (
  <div className="blog-post-preview">
    <h3 className="blog-post-preview-title">
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h3>
    <small className="blog-post-preview-date">{post.frontmatter.date}</small>
    <p className="blog-post-preview-excerpt">{post.excerpt}</p>
  </div>
)

BlogPostPreview.propTypes = {
  post: PropTypes.object.isRequired,
}

export default BlogPostPreview
