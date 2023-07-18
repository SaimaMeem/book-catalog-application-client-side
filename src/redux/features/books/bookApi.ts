import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (args) => {
                const { sortBy, sortOrder } = args;
                return {
                    url: '/books',
                    params: { sortBy, sortOrder },
                };
            },
            providesTags: ['books'],
        }),
    }),
});

export const { useGetBooksQuery } = bookApi;
