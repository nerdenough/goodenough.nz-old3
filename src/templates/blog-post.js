import React from 'react'
import { graphql } from 'gatsby'
import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        {post.frontmatter.description ? (
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description}
          />
        ) : (
          <SEO title={post.frontmatter.title} />
        )}
        <BlogPost post={post} />
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`
