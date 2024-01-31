import { apiKey } from '~config/env';
import { api } from '~services/index';

export const movieApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ search, page }) => ({
        url: `?apikey=${apiKey}&s=${search}&page=${page}`,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (prevData, newData, { arg }) => {
        const page = arg.page;

        const totalPages = Math.ceil(newData.totalResults / 10);

        if (newData.Response == 'False')
          return {
            error: newData.Error,
          };

        if (page == 1)
          return {
            ...newData,
            Search: [...newData?.Search],
            lastPage: page,
            totalPages,
          };

        return {
          ...newData,
          Search: [...prevData?.Search, ...newData?.Search],
          lastPage: page,
          totalPages,
        };
      },
      forceRefetch({ currentArg, previousArg }: any) {
        return currentArg !== previousArg;
      },
      providesTags: ['Movies'],
    }),
    getMovie: builder.query({
      query: ({ id }) => ({
        url: `?apikey=${apiKey}&i=${id}`,
      }),
      providesTags: ['Movie'],
    }),
  }),
});

export const { useGetMovieQuery, useGetMoviesQuery } = movieApi;
