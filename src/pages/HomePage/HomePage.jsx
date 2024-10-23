import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../filmCollection';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoading(true);
      try {
        const movies = await fetchTrendingMovies('popular');
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies', error);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={css.homeWrapper}>
      <h1 className={css.listTitle}>Trending Today</h1>
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
