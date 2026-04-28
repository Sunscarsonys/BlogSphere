import { Link } from "react-router-dom";

const DEFAULT_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80";

const BlogDetails = ({ post, onLike, onDelete }) => {
  const bannerImage = post.bannerImage?.trim() || DEFAULT_BANNER_IMAGE;

  return (
    <article className="bg-white">

      <div className="w-full overflow-hidden">
        <img
          src={bannerImage}
          alt={post.title}
          className="h-[260px] w-full object-cover sm:h-[360px] md:h-[420px]"
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 md:py-12">

        <p className="mb-3 text-sm text-slate-500">
          By <span className="font-medium text-slate-700">{post.author}</span> •{" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <h1 className="font-heading mb-6 text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          {post.title}
        </h1>

        <div className="prose prose-slate max-w-none text-[1.05rem] leading-8">
          <p className="whitespace-pre-line">{post.content}</p>
        </div>

        <div className="my-8 h-px w-full bg-slate-200" />

        <div className="flex flex-wrap items-center justify-between gap-4">

          <button
            onClick={() => onLike(post.id)}
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition bg-slate-100 text-slate-700 hover:bg-rose-100 hover:text-rose-600"
          >
            ❤️ {post.likes}
          </button>

          <div className="flex gap-3">
            <Link
              to={`/edit/${post.id}`}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
            >
              Edit
            </Link>

            <button
              onClick={() => onDelete(post.id)}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;