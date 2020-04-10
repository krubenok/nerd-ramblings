import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Styled, css, Flex } from "theme-ui"
import BioContent from "./bio-content"

const MyBio = () => {
  const data = useStaticQuery(MyBioQuery)
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = data

  return (
    <Flex css={css({ mb: 8, alignItems: `center` })}>
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          css={css({
            mr: 3,
            mb: 0,
            width: 96,
            minWidth: 96,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 4,
            mb: 0,
            width: 96,
            minWidth: 96,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )}
      <Styled.div>
        <BioContent />
      </Styled.div>
    </Flex>
  )
}

const MyBioQuery = graphql`
  query MyBioQuery {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default MyBio
