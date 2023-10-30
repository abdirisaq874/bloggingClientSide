'use client';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Importing Slices
import BlogsSlice from './slices/BlogsSlice';

//  Importing API functions
import BlogsAPI from './apis/BlogsApi';
import UsersApi from './apis/UsersAPI';

const store = configureStore({
  reducer: {
    Blogs: BlogsSlice,
    [BlogsAPI.reducerPath]: BlogsAPI.reducer,
    [UsersApi.reducerPath]: UsersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(BlogsAPI.middleware)
      .concat(UsersApi.middleware);
  },
});

setupListeners(store.dispatch);

// console.log(store.getState());

export {
  useFetchBlogsQuery,
  useFetchCommentsQuery,
  useCreateCommentMutation,
  useUpdadeCommentMutation,
  useDeleteCommentMutation,
  useToggleLikedMutation,
  useGenerateDescriptionMutation,
  useGenerateKeywordsMutation,
  useGenerateTagsMutation,
  useGenerateMinutesToReadMutation,
  useCreateBlogMutation,
  useFetchLatestBlogsQuery,
} from './apis/BlogsApi';

export {
  useRegisterUserMutation,
  useLoginUserMutation,
  useFetchUsersQuery,
  useLogOutUserMutation,
} from './apis/UsersAPI';

export {
  SetBlogsPage,
  SetBlogsLimit,
  SetBlogsTotalBlogs,
  SetCommentsPage,
  SetCommentsLimit,
  SetCommentsTotalComments,
} from './slices/BlogsSlice';

export { store };
