import Head from 'next/head'
import { GetStaticProps } from 'next'

import Container from 'components/container'
import MoreStories from 'components/more-stories'
import HeroPost from 'components/hero-post'
import Layout from 'components/layout'
import { getAllPostsForHome } from 'lib/api'
import { CMS_NAME } from 'lib/constants'
import { Post } from 'lib/types'

type IndexProps = {
  preview: boolean
  allPosts: {
    edges: Post[]
  }
}

export default function Index({ allPosts: { edges }, preview }: IndexProps) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <>
      <Layout preview={preview}>
        <Container>{morePosts.length > 0 && <MoreStories posts={morePosts} />}</Container>
      </Layout>
    </>
  )
}

// export async function getStaticProps({ preview = false }): GetStaticProps {
//   const allPosts = await getAllPostsForHome(preview)
//   return {
//     props: { allPosts, preview },
//   }
// }

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
