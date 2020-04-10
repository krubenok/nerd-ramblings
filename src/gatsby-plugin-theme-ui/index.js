import merge from "deepmerge"
import defaultTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"

export default merge(defaultTheme, {
  ...defaultTheme,
  useColorSchemeMediaQuery: true,
  sizes: {
    container: 800,
  },
  fonts: {
    body: "IBM Plex Sans, system-ui, sans-serif",
    heading: "IBM Plex Sans, system-ui, sans-serif",
    // body: "system-ui, sans-serif",
    // heading: "system-ui, sans-serif",
  },
  fontWeights: {
    heading: 700,
    body: 300,
  },
  lineHeights: {
    body: 1.6,
  },
})
