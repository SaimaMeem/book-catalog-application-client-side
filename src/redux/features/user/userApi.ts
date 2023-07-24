import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => {
                console.log(email, password);

                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: { email, password },
                };
            },
            // invalidatesTags: ['wishlist'],
        }),
        addToWishList: builder.mutation({
            query: ({ id, title }) => {
                return {
                    url: '/users/add-to-wishlist',
                    method: 'POST',
                    body: { id, title },
                };
            },
            invalidatesTags: ['wishlist'],
        }),
    }),
});

export const { useAddToWishListMutation, useLoginMutation } = bookApi;
