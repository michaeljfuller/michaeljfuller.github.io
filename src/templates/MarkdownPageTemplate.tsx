import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type MarkdownPageProps = PageProps<DataProps>;

const MarkdownPageTemplate: React.FC<MarkdownPageProps> = ({ data }) => {
  const meta = data.markdownRemark.frontmatter;
  const body = data.markdownRemark.html;

  return <Layout>
    <Seo title={meta.title} />
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </Layout>;
}

export default MarkdownPageTemplate

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
interface DataProps {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
    };
  };
}
