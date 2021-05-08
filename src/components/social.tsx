import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/css"

const socialHeight = 60;

export const Social = () => (
  <div className={styles.root}>

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
    <a href="https://twitter.com/mifuller" target="_blank">
      <StaticImage
        src="../images/twitter.png"
        height={socialHeight}
        placeholder="none"
        quality={95}
        alt="Twitter"
      />
    </a>

  </div>
)


const styles = {
  root: css`
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
