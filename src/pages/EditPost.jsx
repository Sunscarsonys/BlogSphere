import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import BlogForm from '../components/BlogForm';
import { updatePost } from '../features/posts/postsSlice';
import { useNotification } from '../context/NotificationContext';

const EditPost = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.posts.find((item) => item.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useNotification();

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h2 className="font-heading text-4xl text-slate-800">Post not found</h2>
        <Link to="/" className="mt-3 inline-block text-black hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  const handleSubmit = (values) => {
    dispatch(
      updatePost({
        id: post.id,
        ...values,
      })
    );
    showToast('Post updated');
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="space-y-2">
      <BackButton />
      
      <section className="mx-auto max-w-4xl px-4 py-4 text-center md:py-6 lg:py-10">
        <div className="space-y-3">
          <h1 className="font-heading text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Edit Post
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Update your story details.
          </p>
        </div>
      </section>
      
      <BlogForm initialValues={post} submitLabel="Save Changes" onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPost;