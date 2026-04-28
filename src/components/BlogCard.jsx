import { Link } from "react-router-dom";

const DEFAULT_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80";

const BlogCard = ({ post, onLike, onDelete }) => {
  const previewText =
    post.content.length > 140
      ? `${post.content.slice(0, 140).trim()}...`
      : post.content;
  const bannerImage = post.bannerImage?.trim() || DEFAULT_BANNER_IMAGE;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
      <Link to={`/post/${post.id}`} className="block overflow-hidden">
        <img
          src={bannerImage}
          alt={post.title}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </Link>
      <div className="flex h-full flex-col p-6">
        <Link to={`/post/${post.id}`} className="mb-2">
          <h3 className="font-heading line-clamp-2 text-[2rem] leading-[1.05] text-slate-900">
            {post.title}
          </h3>
        </Link>
        <p className="font-content mb-5 line-clamp-3 text-base leading-7 text-slate-600">
          {previewText}
        </p>
        <div className="mt-auto space-y-5">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-medium">By {post.author}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onLike(post.id)}
              className="rounded-full px-3 py-2 text-sm font-medium transition bg-rose-100 text-rose-600"
            >
              ❤️ Like ({post.likes})
            </button>
            <Link
              to={`/edit/${post.id}`}
              className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
            >
              Edit
            </Link>
            <button
              type="button"
              onClick={() => onDelete(post.id)}
              className="rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
