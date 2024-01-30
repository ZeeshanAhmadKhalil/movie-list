import { api } from '~services/index';

export const movieApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ search, page }) => ({
        url: `&?s=${search}&page=${page}`,
      }),
      providesTags: ['Movies'],
    }),
    getMovie: builder.query({
      query: ({ id }) => ({
        url: `&?i=${id}`,
      }),
      providesTags: ['Movie'],
    }),
  }),
});

export const { useGetMovieQuery, useGetMoviesQuery } = movieApi;
