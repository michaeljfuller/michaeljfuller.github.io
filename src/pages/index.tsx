import * as React from "react"
import { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Parallax from "../components/parallax"

const socialHeight = 60;
const picSize = 250;

const IndexPage = (props: PageProps) => {
  return <Layout path={props.path}>
    <Seo title="Home" />
    <h1>Welcome</h1>

    <div className={styles.content}>

      <div>
        <p>Hi, I'm Michael - a senior web developer with over 10 years of commercial experience.</p>
        <p>
          As a Senior Programmer, my duty was to support my colleagues in their work.<br />
          This was bolstered by my additional roles as Team Leader, where I saw to my colleagues personal needs, and Scrum Master, where I helped guide and protect the team.
        </p>
        <p>
          In my time, worked with a wide range of technologies,
          from <em>Apache <strong className={styles.underline}>A</strong>nt</em> to <em><strong className={styles.underline}>Z</strong>URB Foundation</em>.<br />
          My main interest is in modern front-end development, but I have experience in full-stack development.
        </p>
        <p>
          In my spare time I also enjoy programming - seeing what new technologies there are, and getting my hands on them.<br />
          Other than that, I'm an avid gamer and generally interested in the internet and geek culture.
          I also enjoy socializing and learning about people outside my demographic, such as the LGBT, neurodivergent and disabled communities, as well as people from many different countries.
          I've also started learning learn sign language to communicate with the deaf community.
        </p>
      </div>

      <StaticImage
        src="../images/me.jpg"
        width={picSize}
        height={picSize}
        placeholder="blurred"
        quality={95}
        alt="A photo of me"
        className={styles.photo}
      />

    </div>
    <div className={styles.social}>

      <a href="https://www.linkedin.com/in/michael-fuller-35ab0065/" target="_blank">
        <StaticImage
          src="../images/linkedin.png"
          height={socialHeight}
          placeholder="none"
          quality={95}
          alt="LinkedIn"
        />
      </a>
      <a href="https://github.com/michaeljfuller" target="_blank">
        <StaticImage
          src="../images/github.png"
          height={socialHeight}
          placeholder="none"
          quality={95}
          alt="GitHub"
        />
      </a>

    </div>

    <Parallax modifier={0.02}>
      <p className={styles.quote}>
        <em>"A good programmer is someone who always looks both ways before crossing a one-way street."</em>
        <br />
        ~ Doug Linder
      </p>
    </Parallax>

  </Layout>
}

export default IndexPage

const styles = {
  content: css`
    display: flex;
    flex-direction: row;
    & > div:first-child {
      flex-grow: 1;
    }
  `,
  photo: css`
    margin-left: 1em;
    border-radius: 50%;
    min-width: ${picSize}px;
    min-height: ${picSize}px;
    max-width: ${picSize}px;
    max-height: ${picSize}px;
  `,
  quote: css`
    margin-top: 0.2rem;
    opacity: 0.6;
    user-select: none;
  `,
  underline: css`
    text-decoration: underline;
  `,
  social: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: ${socialHeight}px;
    a {
      opacity: 0.7;
    }
    a: hover {
      opacity: 1;
    }
    img {
      height: ${socialHeight}px;
    }
  `
}
