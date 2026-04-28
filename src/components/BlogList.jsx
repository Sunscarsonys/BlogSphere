import BlogCard from './BlogCard';

const BlogList = ({ posts, onLike, onDelete }) => {
  if (!posts.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-[0_8px_22px_rgba(15,23,42,0.05)]">
        <h2 className="font-heading mb-2 text-4xl text-slate-800">No posts yet</h2>
        <p className="text-slate-600">
          Create your first blog post to get started.
        </p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onLike={onLike} onDelete={onDelete} />
      ))}
    </section>
  );
};

export default BlogList;
