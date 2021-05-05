/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet, HelmetProps } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type HelmetMeta = HelmetProps['meta'];

interface SeoProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: HelmetMeta;
}

function Seo(props: SeoProps) {
  const { title, description = '', lang = 'en', meta = [] } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const defaultMeta: HelmetMeta = [
    { name: `description`, content: metaDescription },
    { property: `og:title`, content: title },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: site.siteMetadata?.author || `` },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: metaDescription },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={defaultMeta.concat(meta)}
    />
  )
}

export default Seo
