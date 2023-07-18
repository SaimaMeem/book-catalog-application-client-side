import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1/',
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (args) => {
                const { sortBy, sortOrder } = args;
                return {
                    url: '/books',
                    params: { sortBy, sortOrder },
                };
            },
        }),
    }),
});

export const { useGetBooksQuery } = api;
