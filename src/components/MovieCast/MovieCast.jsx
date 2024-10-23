import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../filmCollection';
import Loader from '../Loader/Loader';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching movie cast', error);
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  if (loading) return <Loader />;

  return (
    <ul>
      {cast && cast.length > 0 ? (
        cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              width="100"
            />
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))
      ) : (
        <p>No cast information available.</p>
      )}
    </ul>
  );
};

export default MovieCast;
