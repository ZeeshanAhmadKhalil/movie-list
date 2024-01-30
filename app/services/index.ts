import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '~config/env';

export const api = createApi({
  tagTypes: ['Movie', 'Movies'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: () => ({}),
});
