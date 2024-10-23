import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../filmCollection'; // Функція для запиту до API
import MovieList from '../../components/MovieList/MovieList'; // Компонент для відображення списку фільмів
import Loader from '../../components/Loader/Loader';
import SearchWindow from '../../components/SearchWindow/SearchWindow'; // Компонент для пошуку

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
    <div>
      <SearchWindow onSubmit={handleSearch} />
      {loading ? <Loader /> : movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;












// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]); // Стан для збереження списку фільмів
//   const [searchQuery, setSearchQuery] = useState(''); // Пошуковий запит
//   const [loading, setLoading] = useState(false); // Стан для відображення завантаження
//   const [error, setError] = useState(null); // Стан для збереження помилки

//   // Функція, що обробляє пошук і змінює searchQuery
//   const handleSearchSubmit = query => {
//     setSearchQuery(query); // Оновлюємо пошуковий запит при відправленні форми
//   };

//   // Використовуємо useEffect для виконання запиту на фільми при зміні searchQuery
//   useEffect(() => {
//     const getMovies = async () => {
//       if (!searchQuery.trim()) return; // Якщо запит порожній, не виконуємо запит

//       setLoading(true); // Вмикаємо стан завантаження
//       setError(null); // Очищаємо стан помилок

//       try {
//         const response = await fetchMovies(searchQuery); // Виконуємо запит до API
//         setMovies(response); // Оновлюємо стан фільмів
//       } catch (err) {
//         setError('Failed to fetch movies. Please try again.'); // Виводимо помилку
//       } finally {
//         setLoading(false); // Вимикаємо стан завантаження
//       }
//     };

//     getMovies(); // Викликаємо функцію для отримання фільмів при кожній зміні searchQuery
//   }, [searchQuery]); // Виконуємо тільки при зміні пошукового запиту

//   return (
//     <div>
//       <SearchWindow submit={handleSearchSubmit} />{' '}
//       {/* Передаємо функцію обробки в SearchWindow */}
//       {/* Відображаємо стан завантаження, помилку або список фільмів */}
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {!loading && !error && <MovieList movies={movies} />}
//     </div>
//   );
// };

// export default MoviesPage;
