import { useEffect, useState, useRef } from 'react';
import {
  useParams,
  Outlet,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../filmCollection';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetailsPage.module.css'
import clsx from 'clsx';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkRef = useRef(location.state?.from || '/movies'); 

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
    <div className={css.detailsWrapper}>
      <button className={css.btnGoBack} onClick={handleGoBack}>
        Go back
      </button>
      <div className={css.itemWrap}>
        <img
          className={css.imgStyle}
           src={movie.poster_path 
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
          : defaultImg}
          alt={movie.title}
          width="250"
          alt='poster'
        />

       
        <div className={css.descriptionWrap}>
          <h2 className={css.movieTitle}>{movie.title}</h2>

          <h4>Description:</h4>
          <p>{movie.overview}</p>

          <h4>Release date:</h4>
          <p>{movie.release_date}</p>

          <h4>User score:</h4>
          <p> {movie.vote_average}</p>
        </div>
      </div>
      <nav className={css.inform}>
        <NavLink
          className={buildCssClasses}
          to="cast"
          state={{ from: backLinkRef.current }}
        >
          Cast
        </NavLink>
        <NavLink
          className={buildCssClasses}
          to="reviews"
          state={{ from: backLinkRef.current }}
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
