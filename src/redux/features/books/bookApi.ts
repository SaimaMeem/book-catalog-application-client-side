import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
        }),
        getBooks: builder.query({
            query: (args) => {
                const { limit, searchTerm, genre, publicationYear } = args;
                return {
                    url: '/books',
                    params: { limit, searchTerm, genre, publicationYear },
                };
            },
            // providesTags: ['addnewbook'],
        }),
        postBook: builder.mutation({
            query: ({ bookDetails }) => ({
                url: '/books',
                method: 'POST',
                body: bookDetails,
            }),
            // invalidatesTags: ['addnewbook'],
        }),
    }),
});

export const { useGetBooksQuery, usePostBookMutation, useGetSingleBookQuery } =
    bookApi;
