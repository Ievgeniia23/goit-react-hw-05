import { useEffect, useState } from 'react';
import { fetchMovies } from '../../filmCollection';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      try {
        const movies = await fetchMovies('popular');
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching popular movies', error);
      } finally {
        setLoading(false);
      }
    };

    getPopularMovies();
  }, []);

  return (
    <div className={css.homeWrapper}>
      <h1 className={css.listTitle}>Trending Today</h1>
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
