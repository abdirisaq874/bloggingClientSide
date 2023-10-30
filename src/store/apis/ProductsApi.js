import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

// DEV ONLY!!!
// const pause = (duration) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };

const ProductsAPI = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    // fetchFn: async (...args) => {
    //   // REMOVE FOR PRODUCTION
    //   await pause(100);
    //   return fetch(...args);
    // },
    baseUrl: 'https://bloggingbackend.azurewebsites.net/api/v1',

    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: (query) => {
          return {
            url: `/products?${query}`,
            method: 'GET',
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          // `onStart` side-effect
          // toast.info('Fetching Products...');
          try {
            await queryFulfilled;
            // `onSuccess` side-effect
            // toast.success(data.message);
          } catch (err) {
            // `onError` side-effect
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
      fetchProduct: builder.query({
        query: (id) => {
          console.log('id:', id);
          return {
            url: `/products/${id}`,
            method: 'GET',
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          // `onStart` side-effect
          // toast.info('Fetching Products...');
          try {
            await queryFulfilled;
            // `onSuccess` side-effect
            // toast.success(data.message);
          } catch (err) {
            // `onError` side-effect
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
      fetchProtectedRoute: builder.mutation({
        query: () => {
          return {
            url: '/protected',
            method: 'POST',
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          // `onStart` side-effect
          toast.info('Fetching Protected Route...');
          try {
            const { data } = await queryFulfilled;
            // `onSuccess` side-effect
            toast.success(data.message);
          } catch (err) {
            // `onError` side-effect
            if (err.error.data && err.error.data.message) {
              toast.error(err.error.data.message);
              return;
            }
            toast.error(err.error.error);
          }
        },
      }),
    };
  },
});

export const {
  useFetchProductsQuery,
  useFetchProductQuery,
  useFetchProtectedRouteMutation,
} = ProductsAPI;
export default ProductsAPI;
