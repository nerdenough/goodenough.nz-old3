/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              edges {
                node {
                  excerpt(pruneLength: 250)
                  html
                  id
                  frontmatter {
                    date
                    path
                    title
                    description
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {},
          })
        })
      })
    )
  })
}
