import * as React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/css'

export interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header className={styles.root}>
    <div>
      <h1 className={styles.title}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header

const styles = {
  root: css`
    background: rebeccapurple;
      margin-bottom: 1.45rem;
      & > div {
          margin: 0 auto;
          max-width: 960px;
          padding: 1.45rem 1.0875rem;
      }
  `,
  title: css`
    margin: 0;
    a {
        color: white;
        text-decoration: none;
    }
  `,
}
