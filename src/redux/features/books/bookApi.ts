import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (args) => {
                const { limit, searchTerm, genre } = args;
                return {
                    url: '/books',
                    params: { limit, searchTerm, genre },
                };
            },
            providesTags: ['books'],
        }),
    }),
});

export const { useGetBooksQuery } = bookApi;
