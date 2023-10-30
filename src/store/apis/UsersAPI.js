import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { SetFormData } from '../slices/UsersSlice';
// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const UsersApi = createApi({
  reducerPath: 'Users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/v1/auth',
    fetchFn: async (...args) => {
      // REMOVE FOR PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      RegisterUser: builder.mutation({
        // invalidatesTags: (result, error, user) => {
        //   return [{ type: 'UsersRegistration', id: user.email }];
        // },
        query: (formData) => {
          return {
            url: '/Register',
            method: 'POST',
            body: {
              Name: formData.firstName + ' ' + formData.lastName,
              Email: formData.email,
              Password: formData.password,
            },
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          // `onStart` side-effect
          toast.info('Registering User...');
          try {
            const { data } = await queryFulfilled;
            // `onSuccess` side-effect
            toast.success(data.message);
          } catch (err) {
            // `onError` side-effect
            console.error(err.error);
            toast.error(err.error.data.message);
          }
        },
      }),
      LoginUser: builder.mutation({
        // invalidatesTags: (result, error, user) => {
        //   return [{ type: 'UsersSignIn', id: user.email }];
        // },
        query: ({ formData }) => {
          return {
            url: '/Login',
            method: 'POST',
            body: {
              Email: formData.email,
              Password: formData.password,
            },
          };
        },
        async onQueryStarted({ router }, { dispatch, queryFulfilled }) {
          // `onStart` side-effect
          toast.info('Logging In User...');
          try {
            const { data } = await queryFulfilled;
            // `onSuccess` side-effect
            toast.success(data.message);
            router.refresh();
            // window.history.pushState({}, '', window.location.pathname);
            // window.location.reload();
          } catch (err) {
            // `onError` side-effect
            console.log(err);
            toast.error(err.error.data.message);
          }
        },
      }),
      fetchUsers: builder.query({
        // providesTags: (result, error, user) => {
        //   const tags = result.map((album) => {
        //     return { type: 'Users', id: album.id };
        //   });
        //   tags.push({ type: 'User', id: user.email });
        //   return tags;
        // },
        query: (user) => {
          return {
            url: '/users',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
      LogOutUser: builder.mutation({
        // invalidatesTags: (result, error, user) => {
        //   return [{ type: 'UsersSignIn', id: user.email }];
        // },
        query: () => {
          return {
            url: '/Logout',
            method: 'POST',
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          // `onStart` side-effect
          toast.info('Logging Out User...');
          try {
            const { data } = await queryFulfilled;
            // `onSuccess` side-effect
            toast.success(data.message);
          } catch (err) {
            // `onError` side-effect
            toast.error(err.error.data.message);
          }
        },
      }),
    };
  },
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useFetchUsersQuery,
  useLogOutUserMutation,
} = UsersApi;
export default UsersApi;
