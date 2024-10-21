import { useEffect, useState } from 'react';
import fetchMovies from '../../filmCollection';

import MovieList from '../../components/MovieList/MovieList';
import SearchWindow from '../../components/SearchWindow/SearchWindow';


const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      if (searchQuery.trim() === '') {
        // Якщо searchQuery порожній, не робимо запит
        setMovies([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetchMovies(searchQuery); // Викликаємо fetchMovies з введеним запитом
        setMovies(response);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [searchQuery]); // Запит буде виконуватись при зміні searchQuery

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <SearchWindow/>
      </div>

     
    
  );
};

export default MoviesPage;



 // {loading ? <p>Loading...</p> : <MovieList movies={movies} />}