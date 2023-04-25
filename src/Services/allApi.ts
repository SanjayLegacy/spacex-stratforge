import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/latest',
    prepareHeaders: (headers) => {
        return headers;
    },
})

export const allApis = createApi({
    reducerPath: "allApi",
    baseQuery: baseQuery,
    tagTypes: ['History', 'Rocket', 'Launches'],
    endpoints: (builder) => ({})
});