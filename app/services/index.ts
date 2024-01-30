import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey, baseUrl } from '~config/env';

export const api = createApi({
  tagTypes: ['Movie', 'Movies'],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + `/apikey=${apiKey}`,
    prepareHeaders: (headers, { getState }: any) => {
      const token = getState().auth.user?.token;

      if (token) headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: () => ({}),
});
