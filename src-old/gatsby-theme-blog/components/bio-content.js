import React, { Fragment } from "react"
import { Styled } from "theme-ui"

export default () => (
  <Fragment>
    Written by <b>Kyle Rubenok</b> a Computer Science student studying at McGill
    University. Previously President at{" "}
    <Styled.a href="https://mcgill-csus.ca"> McGill CSUS</Styled.a>, Co-Director
    at <Styled.a href="https://hackmcgill.ca">HackMcGill </Styled.a>
    and Founding Partner at{" "}
    <Styled.a href="https://penguinleaf.com"> Penguinleaf</Styled.a>. Incoming
    PM at Microsoft.{" "}
    <Styled.a href="https://twitter.com/krubenok/">
      You should follow him on Twitter
    </Styled.a>
  </Fragment>
)
