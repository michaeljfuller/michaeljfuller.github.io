import * as React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/css'

export interface HeaderProps {
  siteTitle: string;
  path?: string;
}

const Header = (props: HeaderProps) => {
  const { siteTitle, path } = props;

  return <header className={styles.root}>
    <div>
      <h1 className={styles.title}>
        <HeaderLink path="/" currentPath={path}>{siteTitle}</HeaderLink>
      </h1>
      <div className={styles.links}>
        <HeaderLink path="/" currentPath={path}>Home</HeaderLink>
        <HeaderLink path="/about/" currentPath={path}>About</HeaderLink>
        <HeaderLink path="/experience/" currentPath={path}>Experience</HeaderLink>
      </div>
    </div>
  </header>
}

export default Header

type HeaderLinkProps = React.PropsWithChildren<{
  path: string;
  currentPath?: string;
  className?: string;
}>;
const HeaderLink = ({children, path, currentPath, className}: HeaderLinkProps) => (
  path === currentPath ?
  <span className={className}>{children}</span> :
  <Link to={path} className={className}>{children}</Link>
);

const styles = {
  root: css`
    background-image: linear-gradient(
      var(--lighting-angle), 
      var(--color-secondary) 60%, 
      var(--color-primary) 150%
    );
    
    border-bottom: 1px solid var(--color-primary);
    margin-bottom: 1rem;
    & > div {
      margin: 0 auto;
      max-width: 960px;
      padding: .5rem 1rem;
    }
  `,
  title: css`
    margin: 0;
    * {
      color: var(--color-primary);
      text-decoration: none;
      font-size: 1.8rem;
      user-select: none;
    }
  `,
  links: css`
    display: flex;
    flex-direction: row;
    gap: 1em;
    span {
      color: var(--color-primary);
      text-decoration: underline;
      user-select: none;
    }
    a {
      color: var(--color-primary);
      text-decoration: none;
      filter: brightness(80%);
    }
    a:hover,
    a:active,
    a:focus {
      filter: unset;
    }
  `
}
