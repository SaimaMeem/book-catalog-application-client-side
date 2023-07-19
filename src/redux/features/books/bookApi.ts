import { api } from '../../api/apiSlice';

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (args) => {
                const { limit } = args;
                return {
                    url: '/books',
                    params: { limit },
                };
            },
            providesTags: ['books'],
        }),
    }),
});

export const { useGetBooksQuery } = bookApi;
