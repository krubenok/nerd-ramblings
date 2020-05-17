/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
// @ts-ignore
import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero"
// @ts-ignore
import Bottom from "@lekoarts/gatsby-theme-minimal-blog/src/texts/bottom"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "./listing"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

type PostsProps = {
    posts: {
        slug: string
        title: string
        date: string
        excerpt: string
        description: string
        timeToRead: number
        tags?: {
            name: string
            slug: string
        }[]
    }[]
}

const Homepage = ({ posts }: PostsProps) => {
    const { basePath, blogPath } = useMinimalBlogConfig()

    return (
        <Layout>
            <section sx={{ mb: [0, 3, 5], p: { fontSize: [1, 2, 2], mt: 1 } }}>
                <Hero />
            </section>
            <Title text="Latest Posts">
                <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
                    Read all posts
                </Link>
            </Title>
            <Listing posts={posts} />
            {/* <Listing posts={posts} showTags={true} /> */}
            <List>
                <Bottom />
            </List>
        </Layout>
    )
}

export default Homepage
