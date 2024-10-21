import { useEffect, useState } from 'react';
import fetchMovies from '../../filmCollection';

import MovieList from '../../components/MovieList/MovieList';



const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetchMovies('popular'); // Передайте параметри запиту
      setMovies(response);
      setLoading(false);
    };

    getPopularMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;








