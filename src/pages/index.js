import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={['brendan goodenough', 'brendan', 'goodenough', 'nerdenough']}
      />
      <div className="blog-posts">
        {posts.map(({ node: post }) => {
          return (
            <div className="blog-post-preview">
              <h3>{post.frontmatter.title}</h3>
              <small>{post.frontmatter.date}</small>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
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
