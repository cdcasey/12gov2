import { useState } from 'react'
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
  // const heroPost = edges[0]?.node
  // const morePosts = edges.slice(1)
  const MAX_POSTS = edges.length

  const setPostNum = () => {
    setPostLimit((prevPostLimit) => {
      let newPostLimit = prevPostLimit + 6
      newPostLimit = newPostLimit >= MAX_POSTS ? MAX_POSTS : newPostLimit
      return newPostLimit
    })
  }

  const [postLimit, setPostLimit] = useState(9)

  const morePosts = edges.slice(0, postLimit)
  console.log({ postLimit })

  return (
    <>
      <Layout preview={preview}>
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          {postLimit >= MAX_POSTS ? (
            <button
              className="block m-auto bg-otgopurple-dark text-otgowhite py-2 px-4 rounded bg-opacity-70 cursor-default"
              type="button"
              onClick={setPostNum}
              disabled
            >
              that&rsquo;s it!
            </button>
          ) : (
            <button
              className="block m-auto bg-otgopurple-dark text-otgowhite py-2 px-4 rounded hover:text-otgoorange-light duration-200 "
              type="button"
              onClick={setPostNum}
            >
              More
            </button>
          )}
        </Container>
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
  const allPosts = await getAllPostsForHome('Episodes')

  return {
    props: { allPosts, preview },
  }
}
