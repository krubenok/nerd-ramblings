// example Layout.js
import React from 'react'
import {
    themes
} from 'mdx-deck'
export const theme = themes.future

export default ({
    children
}) => ( <
    div style = {
        {
            width: '90vw',
        }
    } > {
        children
    } <
    /div>
)