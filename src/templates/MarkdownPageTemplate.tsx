import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "./MarkdownPageTemplate.module.css"

type MarkdownPageProps = PageProps<DataProps>;

const MarkdownPageTemplate: React.FC<MarkdownPageProps> = ({ data, path }) => {
  const {
    title,
    style,
  } = data.markdownRemark.frontmatter;
  const body = data.markdownRemark.html;

  const className = [
    styles.standard,
    style && styles[style],
  ].filter(v => v).join(" ");

  return <Layout path={path}>
    <Seo title={title} />
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </Layout>;
}

export default MarkdownPageTemplate

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                style
            }
        }
    }
`;
interface DataProps {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      style: string;
    };
  };
}
