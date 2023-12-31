import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:
            'https://book-catalog-application-server-side.vercel.app/api/v1/',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).user.accessToken;

            if (token) {
                headers.set('authorization', `${token}`);
            }
            return headers;
        },
    }),
    refetchOnReconnect: true,
    tagTypes: [
        'books',
        'addnewbook',
        'review',
        'wishlist',
        'readinglist',
        'deletebook',
    ],
    endpoints: () => ({}),
});
