import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogList from "../components/BlogList";
import { deletePost, likePost } from "../features/posts/postsSlice";
import { useNotification } from "../context/NotificationContext";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const { showToast } = useNotification();
  const [search, setSearch] = useState("");

  const visiblePosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(normalizedSearch),
    );

    return [...filteredPosts].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }, [posts, search]);

  const handleLike = (id) => {
    const currentPost = posts.find((post) => post.id === id);

    dispatch(likePost(id));

    showToast("Post liked ❤️");
  };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );

    if (!shouldDelete) return;

    dispatch(deletePost(id));
    showToast("Post deleted");
  };

  return (
    <div className="space-y-12">
      <section className="mx-auto max-w-4xl px-4 py-6 text-center md:py-6 lg:py-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Blog Platform
          </p>

          <h1 className="font-heading text-5xl leading-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Stories with Sanskar Soni
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Discover, publish, and manage thoughtful content with a clean
            editorial interface inspired by modern top-tier websites.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search posts by title..."
          className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-base outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100 md:py-4"
        />
      </section>

      <BlogList
        posts={visiblePosts}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
