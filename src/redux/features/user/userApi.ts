import { api } from '../../api/apiSlice';
import { setUserCredential } from './userSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: { email, password },
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        'user',
                        JSON.stringify({
                            email: arg?.email,
                            accessToken: result?.data?.data?.accessToken,
                        })
                    );

                    dispatch(
                        setUserCredential({
                            email: arg?.email,
                            accessToken: result?.data?.data?.accessToken,
                        })
                    );
                } catch (err) {
                    // empty block
                }
            },
            // invalidatesTags: ['wishlist'],
        }),
        signup: builder.mutation({
            query: ({ username, email, password, confirmPassword }) => {
                return {
                    url: '/auth/signup',
                    method: 'POST',
                    body: { username, email, password, confirmPassword },
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        'user',
                        JSON.stringify({
                            email: arg?.email,
                            accessToken: result?.data?.data?.accessToken,
                        })
                    );

                    dispatch(
                        setUserCredential({
                            email: arg?.email,
                            accessToken: result?.data?.data?.accessToken,
                        })
                    );
                } catch (err) {
                    // empty block
                }
            },
            // invalidatesTags: ['wishlist'],
        }),
        addToWishList: builder.mutation({
            query: ({ bookInfo }) => {
                return {
                    url: '/users/add-to-wishlist',
                    method: 'POST',
                    body: { bookInfo },
                };
            },
            invalidatesTags: ['wishlist'],
        }),
        getMyProfile: builder.query({
            query: (args) => {
                const { email } = args;
                return {
                    url: '/users/my-profile',
                    params: { email },
                };
            },
        }),
    }),
});

export const {
    useAddToWishListMutation,
    useLoginMutation,
    useSignupMutation,
    useGetMyProfileQuery,
} = bookApi;
