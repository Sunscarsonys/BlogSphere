import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import BlogForm from "../components/BlogForm";
import { addPost } from "../features/posts/postsSlice";
import { useNotification } from "../context/NotificationContext";

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useNotification();

  const handleSubmit = (values) => {
    dispatch(
      addPost({
        id: crypto.randomUUID(),
        ...values,
        likes: 0,
        likedByUser: false,
        createdAt: new Date().toISOString(),
      }),
    );
    showToast("Post created");
    navigate("/");
  };

  return (
    <div className="space-y-2">
      <BackButton />

      <section className="mx-auto max-w-4xl px-4 py-4 text-center md:py-6 lg:py-10">
        <div className="space-y-3">
          <h1 className="font-heading text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Create New Post
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Share your idea with the community.
          </p>
        </div>
      </section>

      <BlogForm submitLabel="Publish Post" onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPost;
