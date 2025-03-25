import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';


// const token = "Token Will be set here";

const axiosInstance = axios.create({
    baseURL: 'http://shonod.udoyadn.com:8080/api/',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token will set here}`,
    },
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        try {
            const response = await axiosInstance.post(args.url, args.body);
            return { data: response.data };
        } catch (error) {
            return { error: error.message };
        }
    },
    endpoints: (builder) => ({
        getDivision: builder.query({
            query: () => ({ url: 'Certificate/GetDivision' }),
        }),
    }),
});

export const { useGetDivisionQuery } = apiSlice;
