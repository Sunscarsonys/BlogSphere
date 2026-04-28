import { createSlice } from '@reduxjs/toolkit';
import { loadPostsFromStorage } from '../../utils/localStorage';

const initialState = {
  posts: loadPostsFromStorage(),
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content, author, bannerImage } = action.payload;
      const postToUpdate = state.posts.find((post) => post.id === id);

      if (postToUpdate) {
        postToUpdate.title = title;
        postToUpdate.content = content;
        postToUpdate.author = author;
        postToUpdate.bannerImage = bannerImage;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    likePost: (state, action) => {
      const likedPost = state.posts.find((post) => post.id === action.payload);
      if (likedPost) {
        likedPost.likes += 1;
      }
    },
  },
});

export const { addPost, updatePost, deletePost, likePost } = postsSlice.actions;
export default postsSlice.reducer;
