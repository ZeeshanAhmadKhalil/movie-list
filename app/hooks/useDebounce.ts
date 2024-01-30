import { useState } from 'react';

function useDebounce() {
  const [search, setSearch] = useState('cat');
  const [timeoutId, setTimeoutId]: any = useState('');

  const handleSearch = (e: any) => {
    clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        setSearch(e.target.value);
      }, 300)
    );
  };

  return {
    search,
    handleSearch,
  };
}

export default useDebounce;
