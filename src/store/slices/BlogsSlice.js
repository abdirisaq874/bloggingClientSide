import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: {
    page: 1,
    limit: 0,
    totalBlogs: 0,
  },
  comments: {
    page: 1,
    limit: 0,
    totalComments: 0,
  },
  isLoading: false,
  error: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    SetBlogsPage: (state, action) => {
      state.blogs.page = action.payload;
    },
    SetBlogsLimit: (state, action) => {
      state.blogs.limit = action.payload;
    },
    SetBlogsTotalBlogs: (state, action) => {
      state.blogs.totalBlogs = action.payload;
    },
    SetCommentsPage: (state, action) => {
      state.comments.page = action.payload;
    },
    SetCommentsLimit: (state, action) => {
      state.comments.limit = action.payload;
    },
    SetCommentsTotalComments: (state, action) => {
      state.comments.totalComments = action.payload;
    },
  },
});

export default blogsSlice.reducer;
export const {
  SetBlogsPage,
  SetBlogsLimit,
  SetBlogsTotalBlogs,
  SetCommentsPage,
  SetCommentsLimit,
  SetCommentsTotalComments,
} = blogsSlice.actions;
