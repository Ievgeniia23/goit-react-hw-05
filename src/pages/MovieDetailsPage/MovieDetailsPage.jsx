import { useEffect, useState, useRef } from 'react';
import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../filmCollection';
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkRef = useRef(location.state?.from || '/movies'); // Для повернення назад

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details', error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(backLinkRef.current); 
  };

  if (loading) return <Loader />;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>

      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300"
      />
      <p>{movie.overview}</p>

      
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>

      {/* Вкладені маршрути для Cast і Reviews */}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
