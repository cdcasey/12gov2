export type Author = {
  node: {
    name: string
    firstName: string
    lastName: string
    avatar: {
      url: string
    }
  }
}

export type FeaturedImage = {
  node: {
    sourceUrl: string
  }
}

export type Post = {
  node: {
    title: string
    date: string
    slug: string
    excerpt: string
    author: Author
    featuredImage: FeaturedImage
  }
}
