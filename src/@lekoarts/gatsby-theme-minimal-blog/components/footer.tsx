/** @jsx jsx */
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import { jsx, Themed } from "theme-ui";

const Footer = () => {
  const { author } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {author}. All rights reserved.{" "}
        <Themed.a
          aria-label="RSS"
          href="/rss.xml"
          sx={{ textDecoration: `underline` }}
        >
          RSS
        </Themed.a>
      </div>
      <div>
        <span role="img" aria-label="computer emoji">
          💻
        </span>{" "}
        with{" "}
        <span role="img" aria-label="heart emoji">
          💗
        </span>{" "}
        and{" "}
        <Themed.a
          aria-label="Theme Repository"
          href="https://github.com/LekoArts/gatsby-starter-minimal-blog"
        >
          <span role="img" aria-label="paint emoji">
            🎨
          </span>
        </Themed.a>{" "}
        on{" "}
        <Themed.a
          aria-label="Github Repository"
          href="https://github.com/krubenok/nerd-ramblings"
        >
          <span role="img" aria-label="octopus emoji">
            🐙
          </span>
        </Themed.a>
      </div>
    </footer>
  );
};

export default Footer;
