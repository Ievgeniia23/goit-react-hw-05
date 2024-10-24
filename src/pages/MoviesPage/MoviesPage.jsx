import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../filmCollection'; 
import MovieList from '../../components/MovieList/MovieList'; 
import Loader from '../../components/Loader/Loader';
import SearchWindow from '../../components/SearchWindow/SearchWindow'; 
import css from './MoviesPage.module.css'

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      setLoading(true);
      try {
        const movies = await fetchMovies(query);
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching movies', error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [query]);

  const handleSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <div className={css.windowStyle}>
      <SearchWindow onSubmit={handleSearch} />
      {loading ? <Loader /> : movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;












