import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (args) => {
                const { limit, searchTerm } = args;
                return {
                    url: '/books',
                    params: { limit, searchTerm },
                };
            },
            providesTags: ['books'],
        }),
    }),
});

export const { useGetBooksQuery } = bookApi;
