import React from 'react'
import { graphql } from 'gatsby'
import BlogPostPreview from '../components/BlogPostPreview'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../lib/font-awesome.css'

// Import css manually to fix initial scaling
config.autoAddCss = false

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={['brendan goodenough', 'brendan', 'goodenough', 'nerdenough']}
      />
      <div className="blog-posts">
        <h1>Latest Posts</h1>
        {posts.map(({ node: post }) => (
          <BlogPostPreview post={post} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
