import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
  return (
    <section className="mt-12 lg:mt-20">
      <h2 className=" text-5xl mb-8 font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
            restaurant_review_fields={node.restaurant_review_fields}
          />
        ))}
      </div>
    </section>
  );
}
