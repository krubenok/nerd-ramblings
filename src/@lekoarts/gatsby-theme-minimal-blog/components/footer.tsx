/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { author } = useSiteMetadata()

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
        &copy; {new Date().getFullYear()} by {author}. All rights reserved. {" "}
        <Styled.a
          aria-label="RSS"
          href="/rss.xml"
          sx={{textDecoration: `underline`}}
        >
          RSS
        </Styled.a>
      </div>
      <div>
        💻 with 💗 and {" "}
        <Styled.a
          aria-label="Theme Repository"
          href="https://github.com/LekoArts/gatsby-starter-minimal-blog"
        >
          🎨
        </Styled.a>
        {" "} on {" "}
        <Styled.a
          aria-label="Github Repository"
          href="https://github.com/krubenok/nerd-ramblings"
        >
          🐙
        </Styled.a>
      </div>
    </footer>
  )
}

export default Footer
