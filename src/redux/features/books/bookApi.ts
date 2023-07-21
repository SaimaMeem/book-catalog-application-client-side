import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (args) => {
                const { limit, searchTerm, genre, publicationYear } = args;
                // console.log(args);

                return {
                    url: '/books',
                    params: { limit, searchTerm, genre, publicationYear },
                };
            },
            // providesTags: ['books'],
        }),
    }),
});

export const { useGetBooksQuery } = bookApi;
