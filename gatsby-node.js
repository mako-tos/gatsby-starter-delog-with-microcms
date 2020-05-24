const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
  query {
    allMicrocmsBlog(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          blogId
          createdAt(formatString: "YYYY-MM-DD")
          path
        }
      }
    }
  }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMicrocmsBlog.edges.forEach(({ node }) => {
    createPage({
      path: `${node.createdAt}-${node.path}`,
      component: blogPostTemplate,
      context: {
        blogId: node.blogId
      }, // additional data can be passed via context
    })
  })
}