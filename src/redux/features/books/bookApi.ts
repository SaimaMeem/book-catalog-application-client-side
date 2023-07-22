import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ['review'],
        }),
        getBooks: builder.query({
            query: (args) => {
                const { limit, searchTerm, genre, publicationYear } = args;
                return {
                    url: '/books',
                    params: { limit, searchTerm, genre, publicationYear },
                };
            },
            providesTags: ['addnewbook'],
        }),
        postBook: builder.mutation({
            query: ({ bookDetails }) => ({
                url: '/books',
                method: 'POST',
                body: bookDetails,
            }),
            invalidatesTags: ['addnewbook'],
        }),
        updateBook: builder.mutation({
            query: ({ id, bookDetails }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: bookDetails,
            }),
        }),
        postReview: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/review/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['review'],
        }),
        removeBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetBooksQuery,
    usePostBookMutation,
    useGetSingleBookQuery,
    useUpdateBookMutation,
    usePostReviewMutation,
    useRemoveBookMutation,
} = bookApi;
