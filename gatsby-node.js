/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {

  const {type} = node.internal;
  const {createNodeField} = actions

  // Add 'slug' field to MarkdownRemark nodes, which can be picked up by createPages.
  if (type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode, basePath: `pages` })
    });
  }

  // Logging
  const logTitle = "gatsby-node.js:onCreateNode";
  const style = logStyle([color.FgCyan, color.FgMagenta, color.FgYellow]);
  switch (type) {
  //   case "File": console.log(style, logTitle, type, node.internal.mediaType, node.relativePath); break;
  //   case "Directory": console.log(style, logTitle, type, node.name, node.absolutePath); break;
  //   case "MarkdownRemark": console.log(style, logTitle, type, node.frontmatter, node.fileAbsolutePath); break;
  //   case "StaticImage": console.log(style, logTitle, type, node.internal.mediaType, node.relativePath); break;
  //   case "ImageSharp": /*console.log(style, logTitle, type);*/ break;
  //   case "Site": console.log(style, logTitle, type, `${node.host}:${node.port}`, node.siteMetadata); break;
    case "SitePage": console.log(style, logTitle, type, node.path); break;
  //   case "SiteFunction": console.log(style, logTitle, type, node.id); break;
  //   case "SiteBuildMetadata": /*console.log(style, logTitle, type);*/ break;
  //   case "SitePlugin": /*console.log(style, logTitle, type, node.name, node.packageJson?.description);*/ break;
  //   default: console.log(logStyle([color.FgCyan, color.FgMagenta, color.FgRed]), logTitle, type, node);
  }

}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // console.log(
  //   logStyle([color.FgCyan, color.FgBlue]),
  //   "createPages", JSON.stringify(result, null, 4)
  // );

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/MarkdownPageTemplate.tsx`),
      context: { // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

}

/**
 * Create style string that prepends a console log.
 * @param {string[]} colors - A color for each string in the log's argument list.
 */
function logStyle(colors) {
  return colors.join('%s '+color.Reset) + '%s' + color.Reset;
}
/** Log colors */
const color = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",

  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",

  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
};
