const POSTS_KEY = 'blog_posts';

export const loadPostsFromStorage = () => {
  try {
    const rawPosts = localStorage.getItem(POSTS_KEY);
    if (!rawPosts) {
      return [];
    }

    const parsedPosts = JSON.parse(rawPosts);
    if (!Array.isArray(parsedPosts)) {
      return [];
    }

    return parsedPosts.map((post) => ({
      ...post,
      bannerImage: post.bannerImage || '',
      likes: typeof post.likes === 'number' ? post.likes : 0,
      likedByUser: Boolean(post.likedByUser),
    }));
  } catch (error) {
    console.error('Failed to load posts from localStorage:', error);
    return [];
  }
};

export const savePostsToStorage = (posts) => {
  try {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  } catch (error) {
    console.error('Failed to save posts to localStorage:', error);
  }
};
