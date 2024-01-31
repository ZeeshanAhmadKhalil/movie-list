import { useState } from 'react';
import { useGetMoviesQuery } from './services/movieApi';
import useDebounce from '~hooks/useDebounce';
import { Box, Grid, TextField, Typography } from '@mui/material';
import MovieCard from './components/MovieCard';
import ScrollContainer from '~components/ScrollContainer';

function Movie() {
  const { search, handleSearch } = useDebounce();

  const [page, setPage] = useState(1);

  const { data, isFetching } = useGetMoviesQuery({
    page,
    search,
  });

  const handleLoad = () => {
    setPage((prev) => {
      if (data?.lastPage >= data?.totalPages) return prev;
      return prev + 1;
    });
  };

  const handleChange = (e: any) => {
    handleSearch(e);
    setPage(1);
  };

  const renderMovies = data?.Search?.map?.((item: any) => (
    <Grid
      key={item.imdbID}
      sx={{
        border: '0px solid red',
        justifyContent: 'center',
        display: 'flex',
        mb: 4,
      }}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <MovieCard {...item} />
    </Grid>
  ));

  return (
    <ScrollContainer loading={isFetching} loadMore={handleLoad}>
      <Box
        sx={{
          border: '0px solid red',
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
        }}
      >
        <TextField
          variant="outlined"
          label=""
          placeholder="Enter min 3 char to search"
          defaultValue="Pokemon"
          onChange={handleChange}
          sx={{
            border: '0px solid red',
            width: '300px',
            background: 'gray',
            borderRadius: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          mt: 5,
          border: '0px solid red',
          px: {
            lg: 20,
            md: 10,
          },
        }}
      >
        <Grid container sx={{ border: '0px solid red' }}>
          {data?.error ? <Typography>{data?.error}</Typography> : renderMovies}
        </Grid>
      </Box>
    </ScrollContainer>
  );
}

export default Movie;
