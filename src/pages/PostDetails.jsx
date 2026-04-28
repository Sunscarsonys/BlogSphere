import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import BlogDetails from '../components/BlogDetails';
import { deletePost, likePost } from '../features/posts/postsSlice';
import { useNotification } from '../context/NotificationContext';

const PostDetails = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.posts.find((item) => item.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useNotification();

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 text-center">
        <h2 className="font-heading text-4xl text-slate-800">Post not found</h2>
        <Link to="/" className="mt-3 inline-block text-black hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  const handleLike = (postId) => {
    dispatch(likePost(postId));
    showToast('Post liked');
  };

  const handleDelete = (postId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this post?');
    if (!shouldDelete) {
      return;
    }

    dispatch(deletePost(postId));
    showToast('Post deleted');
    navigate('/');
  };

  return (
    <div className="space-y-2">
      <BackButton />
      
      <section className="mx-auto max-w-4xl px-4 py-4 text-center md:py-6 lg:py-10">
        <div className="space-y-3">
          <h1 className="font-heading text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Post Details
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Read and interact with this story.
          </p>
        </div>
      </section>

      <BlogDetails post={post} onLike={handleLike} onDelete={handleDelete} />
    </div>
  );
};

export default PostDetails;