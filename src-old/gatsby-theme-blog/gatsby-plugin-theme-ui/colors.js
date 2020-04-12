import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

// One Light Colours
const light_background = `#fafafa`
const light_purple = `#a625a4`
const light_blue = `#4078f2`
const light_green = `#51a14f`
const light_brown = `#986802`
const light_grey = `#383a42`
const light_secondary_grey = `#a0a1a8`

// One Dark Colours
const dark_background = `#282c34`
const dark_purple = `#c678dd`
const dark_blue = `#61afef`
const dark_green = `#98c379`
const dark_brown = `#d19a66`
const dark_grey = `#abb2bf`
const dark_secondary_grey = `#5c6270`



export default merge(defaultThemeColors, {
  text: light_grey,
  background: light_background,
  primary: light_purple,
  secondary: light_blue,
  muted: light_secondary_grey,
  highlight: light_green,
  heading: light_brown,
  modes: {
    dark: {
      text: dark_grey,
      background: dark_background,
      primary: dark_purple,
      secondary: dark_blue,
      muted: dark_secondary_grey,
      highdark: dark_green,
      heading: dark_brown,
    },
  },
})
