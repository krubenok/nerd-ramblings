/** @jsx jsx */
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import { jsx, Link } from "theme-ui";

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
        <Link
          aria-label="RSS"
          href="/rss.xml"
          sx={{ textDecoration: `underline` }}
        >
          RSS
        </Link>
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
        <Link
          aria-label="Theme Repository"
          href="https://github.com/LekoArts/gatsby-starter-minimal-blog"
        >
          <span role="img" aria-label="paint emoji">
            🎨
          </span>
        </Link>{" "}
        on{" "}
        <Link
          aria-label="Github Repository"
          href="https://github.com/krubenok/nerd-ramblings"
        >
          <span role="img" aria-label="octopus emoji">
            🐙
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
