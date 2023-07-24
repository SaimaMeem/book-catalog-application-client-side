import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
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

export const { useAddToWishListMutation } = bookApi;
