import { useState } from 'react';
import { useGetMoviesQuery } from './services/movieApi';
import useDebounce from '~hooks/useDebounce';

function Movie() {
  const { search, handleSearch } = useDebounce();

  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetMoviesQuery({
    page,
    search,
  });

  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}>
        Movie
      </span>
    </div>
  );
}

export default Movie;
