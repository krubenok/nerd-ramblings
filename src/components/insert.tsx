import React from "react"
import styled from "@emotion/styled"

type InsertProps = {
    children: React.ReactNode
}

const InsertContainer = styled.div`
    border: 2px solid grey;
    border-radius: 18px;
    margin: 35px 35px 35px 35px;
`

export default function Insert(props: InsertProps) {
    return <InsertContainer>{props.children}</InsertContainer>
}
