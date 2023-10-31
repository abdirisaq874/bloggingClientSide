import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

const BlogsAPI = createApi({
  reducerPath: 'blogs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend.mandeez.online/api/v1',
    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      CreateBlog: builder.mutation({
        query: ({ formState }) => {
          return {
            url: `/blogs`,
            method: 'POST',
            body: formState,
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            toast.success(data.message);
          } catch (err) {
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),

      FetchBlogs: builder.query({
        query: () => {
          return {
            url: `/blogs`,
            method: 'GET',
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
          } catch (err) {
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
      FetchComments: builder.query({
        providesTags: (result, error, { BlogId }) => {
          return [{ type: 'Blogs', id: BlogId }];
        },
        query: ({ BlogId, page, limit }) => {
          return {
            url: `/blogs/${BlogId}/comments?page=${page}&limit=${limit}`,
            method: 'GET',
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
          } catch (err) {
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
      createComment: builder.mutation({
        invalidatesTags: (result, error, { blogId }) => {
          return [{ type: 'Blogs', id: blogId }];
        },
        query: ({ blogId, content }) => {
          return {
            url: `/Blogs/${blogId}/comments`,
            method: 'POST',
            body: {
              content,
              blogId,
            },
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;

            toast.success(data.message);
          } catch (err) {
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
      updadeComment: builder.mutation({
        invalidatesTags: (result, error, { blogId }) => {
          return [{ type: 'Blogs', id: blogId }];
        },
        query: ({ blogId, content, commentId }) => {
          return {
            url: `/Blogs/${blogId}/comments/${commentId}`,
            method: 'PUT',
            body: {
              content,
              commentId,
            },
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;

            toast.success(data.message);
          } catch (err) {
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
      deleteComment: builder.mutation({
        invalidatesTags: (result, error, { blogId }) => {
          return [{ type: 'Blogs', id: blogId }];
        },
        query: ({ blogId, CommentId }) => {
          return {
            url: `/Blogs/${blogId}/comments/${CommentId}`,
            method: 'DELETE',
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            toast.success(data.message);
          } catch (err) {
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
      ToggleLiked: builder.mutation({
        query: ({ blogId }) => {
          return {
            url: `/Blogs/${blogId}/likes`,
            method: 'POST',
          };
        },
        async onQueryStarted({ router }, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            toast.success(data.message);
            router.refresh();
          } catch (err) {
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
      GenerateDescription: builder.mutation({
        query: (content) => {
          return {
            url: `/Blogs/generate-description`,
            method: 'POST',
            body: { content },
          };
        },
      }),
      GenerateKeywords: builder.mutation({
        query: (content) => {
          return {
            url: `/Blogs/generate-keywords`,
            method: 'POST',
            body: { content },
          };
        },
      }),
      GenerateTags: builder.mutation({
        query: (content) => {
          return {
            url: `/Blogs/generate-tags`,
            method: 'POST',
            body: { content },
          };
        },
      }),
      GenerateMinutesToRead: builder.mutation({
        query: (content) => {
          return {
            url: `/Blogs/generate-minutes-to-read`,
            method: 'POST',
            body: { content },
          };
        },
      }),
      FetchLatestBlogs: builder.query({
        query: () => {
          return {
            url: `/blogs/latest-blogs`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
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
} = BlogsAPI;

export default BlogsAPI;
