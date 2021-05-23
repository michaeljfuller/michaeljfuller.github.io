import * as React from "react"
import { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const totalWidth = 880;

const ProjectsPage = (props: PageProps) => {
  return <Layout path={props.path}>
    <Seo title="Projects" />
    <h1>Example Projects</h1>

    <div className={styles.content}>

      <Project title="Game of Life in React">

        <p>
          <a href="https://michaeljfuller.github.io/game-of-life/">This</a> is a quick React app that
          replicates <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a>.<br />
          It's small enough to have a quick read through the <a href="https://github.com/michaeljfuller/game-of-life">source</a>, while being complex enough to showcase.<br />
          The project is a pure React app with custom Hooks, TypeScript, a CSS Grid and TDD unit tests.
        </p>

        <div className={styles.images}>
          <StaticImage
            src="../images/projects/game-of-life.png"
            quality={95}
            alt="Game of Life"
            height={300}
          />
        </div>

      </Project>
      <Project title="React Native Web + Mobile App, with AWS">

        <p>
          Study project making <a href="https://github.com/michaeljfuller/FlashDecks">FlashDecks</a> is a web/mobile app
          that lets users create and share collections of "Flash Cards" for studying.
        </p>
        <p>
          Flash Cards are a study tool where a question is on one side, and answers are on the reverse.<br />
          Since these cards are digital they can contain media which physical cards don't, such as video and links.
        </p>
        <p>
          It has a single codebase, it has builds for both web and native React apps.<br />
          The backend is hosted on AWS using their technologies.
        </p>

        <div className={styles.images}>

          <StaticImage
            src="../images/projects/FlashDecks_OwnDecks.png"
            quality={95}
            alt="FlashDecks - Own Decks"
            width={totalWidth/3}
          />
          <StaticImage
            src="../images/projects/FlashDecks_B_1.png"
            quality={95}
            alt="FlashDecks - B, Side 1"
            width={totalWidth/3}
          />
          <StaticImage
            src="../images/projects/FlashDecks_B_2.png"
            quality={95}
            alt="FlashDecks - B, Side 2"
            width={totalWidth/3}
          />
          <StaticImage
            src="../images/projects/FlashDecks_One_1.png"
            quality={95}
            alt="FlashDecks - B, Side 1"
            width={totalWidth/3}
          />
          <StaticImage
            src="../images/projects/FlashDecks_One_2.png"
            quality={95}
            alt="FlashDecks - B, Side 2"
            width={totalWidth/3}
          />
          <StaticImage
            src="../images/projects/FlashDecks_Details.png"
            quality={95}
            alt="FlashDecks - Details"
            width={totalWidth/3}
          />
          <StaticImage
            src="../images/projects/FlashDecks_Resize_Content.png"
            quality={95}
            alt="FlashDecks - Resize Content"
            width={totalWidth/3}
          />
          <StaticImage
            src="../images/projects/FlashDecks_Modify_Content.png"
            quality={95}
            alt="FlashDecks - Modify Content"
            width={totalWidth/3}
          />
          <StaticImage
            src="../images/projects/FlashDecks_KitchenSink.png"
            quality={95}
            alt="FlashDecks - Kitchen Sink"
            width={totalWidth/3}
          />

        </div>

      </Project>
      <Project title="Multiplayer Word Game">

        <p>
          Solo project creating a multiplayer word game (similar to Boggle) where people on the internet raced against
          each other to get the highest score within the time limit. Letters were arranged in a hexagonal shape,
          so each was connected to 4-6 other letters (depending on if it was an edge/corner).
          Players would click/draw a string of connected letters to spell out a word. Points are awarded for length,
          with bonus points for difficult letters.<br />
          Since it’s multiplayer, the game is generated on a Java server.
        </p>
        <p>
          The rules for generating the grid were that it could be of 3 different sizes, must contain a minimum
          number of words, and had a blacklist of words that must never appear (since it’s aimed at children).
          This meant that the words on the grid had to be known at the time of creation. A brute-force approach
          going through the millions of paths through the grid took several seconds after the time is exacerbated
          by applying the rules. A competitor was found with a similar game and their game took a while to start,
          so it appears they were doing the brute force approach.
        </p>
        <p>
          The application was optimised by combining a pathfinding algorithm with the Trie data structure to
          quickly generate a random grid while also knowing the consequence of each letter being placed by the algorithm,<br />
          such as whether it would create an undesired word or break one of the rules regarding how the grid should look.<br />
          This took the processing time down to ~2-10ms.
        </p>
        <div className={styles.images}>

          <StaticImage
            src="../images/projects/PlayLive_Leaderboard.webp"
            quality={95}
            alt="PlayLive Leaderboard"
            width={totalWidth/2}
          />
          <StaticImage
            src="../images/projects/PlayLive_AvatarSelect.webp"
            quality={95}
            alt="PlayLive Avatar Select"
            width={totalWidth/2}
          />

          <StaticImage
            src="../images/projects/PlayLive_Game.webp"
            quality={95}
            alt="PlayLive Gameplay"
            width={totalWidth/2}
          />
          <StaticImage
            src="../images/projects/PlayLive_EndScreen.webp"
            quality={95}
            alt="PlayLive End Screen"
            width={totalWidth/2}
          />

        </div>

      </Project>
      <Project title="Multi-year Greenfield Hybrid Angular App">

        <p>
          Small team creating a major new SaaS product for the company, branching from the school market to parents & children.
          This was a new platform to host pre-existing activities in a new, gamified, context outside the classroom.
        </p>
        <p>
          Working closely with the art team, this was incredibly rich and animated, to give a game-like experience.
          Children could progress through to harder content and earn &quot;gems&quot; for their avatar.
          It has a <a href="https://lumen.laravel.com/">Laravel Lumen</a> back-end and an <a href="https://angularjs.org/">AngularJS</a> front-end.
          Since I was aware <a href="https://angular.io/">Angular 2</a> (now just &quot;Angular&quot;) was being created, I set up the groundwork for the app to use
          Component Based Development, reflecting the patterns Angular 2 was using.<br />
          I also did this because I believed it was a cleaner approach than our existing codebase at the time,
          and being on the ground-floor of this product, I had a chance to change that.
        </p>
        <p>
          My position within this team is probably what got me promoted to Senior Programmer.
        </p>

        <div className={styles.images}>

          <StaticImage
            src="../images/projects/Novabods_Rover.webp"
            quality={95}
            alt="Novabods Subject Select"
            width={totalWidth/2}
          />
          <StaticImage
            src="../images/projects/Novabods_Level.webp"
            quality={95}
            alt="Novabods Content Select"
            width={totalWidth/2}
          />

          <StaticImage
            src="../images/projects/Novabods_Content.png"
            quality={95}
            alt="Novabods Content Gameplay"
            width={totalWidth/2}
            objectFit="contain"
          />
          <StaticImage
            src="../images/projects/Novabods_AvatarSelect.png"
            quality={95}
            alt="Novabods Avatar Select"
            width={totalWidth/2}
          />

          <StaticImage
            src="../images/projects/Novabods_Dashboard.png"
            quality={95}
            alt="Novabods Dashboard"
            width={totalWidth/2}
          />
          <StaticImage
            src="../images/projects/Novabods_ManageAccount.png"
            placeholder="none"
            quality={95}
            alt="Novabods Account Management"
            width={totalWidth/2}
          />

        </div>

      </Project>
      <Project title="Student Assessment Report">

        <p>
          A large data-visualisation project involving the whole department to improve how we present student progress
          to teachers. As a senior developer, I helped break down the project into blocks of work that could be turned
          into Scrum Stories by the Product Owners. I also worked with other developers on the UI.
        </p>

        <div className={styles.images}>
          <StaticImage
            src="../images/projects/AssessmentReport.webp"
            quality={95}
            alt="Assessment Report"
            width={800}
          />
          <StaticImage
            src="../images/projects/AssessmentReport_Drawer.webp"
            quality={95}
            alt="Assessment Report Drawer"
            width={800}
          />
        </div>

      </Project>
      <Project title="New Teacher Tools">

        <p>
          This was our first move from using the old AngularJS to the new Angular 4.
          We created a library of components to create teaching aids for teachers.
          Since I had prior experience with AngularJS and TypeScript from playing around at home,
          I spent a lot of time helping others and running a couple of training sessions.
          The team with accompanied me with the previous project were able to take advantage of being familiar
          with the component-driven workflow.
        </p>

        <div className={styles.images}>
          <StaticImage
            src="../images/projects/TeacherTools_Wheels.webp"
            quality={95}
            alt="Teacher Tool - Wheels"
            width={600}
          />
        </div>

      </Project>
      <Project title="Student Content">

        <p>
          I've worked on many different types of content for children using different technologies.
          <ul>
            <li>Puzzles & Games - Built in Adobe Flash initially and then HTML5 + <a href="https://createjs.com/">CreateJS</a>.</li>
            <li>A Video Player with support materials - Built in Adobe Flash.</li>
            <li>A quiz/assessment app - Built in Adobe Flex.</li>
            <li>Story Books - Built in HTML5 + <a href="https://createjs.com/">CreateJS</a>.</li>
            <li>A mobile game for Android - Built in Java.</li>
          </ul>
        </p>

        <div className={styles.images}>
          <StaticImage
            src="../images/projects/Activity_Intro.png"
            quality={95}
            alt="Activity Into"
            width={totalWidth/2}
          />
          <StaticImage
            src="../images/projects/Activity_Question.png"
            quality={95}
            alt="Activity Question"
            width={totalWidth/2}
          />
        </div>

      </Project>
      <Project title="Single Sign On with parent company">

        <p>
          I was the developer for our Java interface for a SOAP-based Single Sign On system being created by our parent company,
          working closely with their lead developer and adhering to their changing specifications as it was being developed.
        </p>

      </Project>
      <Project title="Database Migration">

        <p>
          This consisted of about 3 people. 1-2 for the architecture of the migration system, 1 person responsible
          for transforming the internal system data, and myself for transforming the customer-facing data.
          This was done with SymmetricDS to transform our messy old SQL databases, into the clean new architecture & structure.
        </p>

      </Project>
      <Project title="News Feed Widget">

        <p>
          While a 3rd party was finishing setting up an external blogging system, I was asked to create a widget to
          show those items within our customers dashboard. It's an Angular 4 app that calls out to a PHP interface
          with caching to the right RSS feed & filters, based on their account & subscription settings.
          There were quite a few last minute changes made to the format their end that I needed to respond to,
          so it was made to be quite robust.
        </p>

        <div className={styles.images}>
          <StaticImage
            src="../images/projects/NewsFeed.png"
            quality={95}
            alt="Teacher Tool - Wheels"
            width={600}
          />
        </div>

      </Project>

    </div>
  </Layout>
}

export default ProjectsPage;

type ProjectProps = React.PropsWithChildren<{
  title: string;
}>;
function Project({ title, children }: ProjectProps) {
  const link = encodeURI(title.replace(/\W+/g, "-").toLowerCase());
  return <section id={link} className={styles.project}>
    <h2>
      <a href={'#'+link}>{title}</a>
    </h2>
    {children}
  </section>
}

const styles = {
  content: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  project: css`
    h2 {
      color: var(--color-secondary);
      a {
        color: var(--color-secondary);
      }
    },
    li {
      margin-bottom: 0;
    }
  `,
  images: css`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 4px;
  `
}
