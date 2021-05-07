import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-8 gap-y-12 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
