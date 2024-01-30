import { useState } from 'react';
import { useGetMoviesQuery } from './services/movieApi';
import useDebounce from '~hooks/useDebounce';
import { Box, Grid } from '@mui/material';
import MovieCard from './components/MovieCard';

function Movie() {
  const { search, handleSearch } = useDebounce();

  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetMoviesQuery({
    page,
    search,
  });

  const renderMovies = data?.Search?.map?.((item: any) => (
    <Grid
      sx={{
        border: '0px solid red',
        justifyContent: 'center',
        display: 'flex',
        mb: 2,
      }}
      item
      xs={2}
    >
      <MovieCard {...item} />
    </Grid>
  ));

  return (
    <Box sx={{ mt: 5 }}>
      <Grid sx={{ border: '0px solid red' }} container>
        {renderMovies}
      </Grid>
    </Box>
  );
}

export default Movie;
