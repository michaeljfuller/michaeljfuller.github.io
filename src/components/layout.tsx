/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/css'

import Header from "./header"

export type LayoutProps = React.PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={styles.container}>
        <main>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout

const styles = {
  container: css`
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
  `,
  footer: css`
    margin-top: 2rem;
  `
};
