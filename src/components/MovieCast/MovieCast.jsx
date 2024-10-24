import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../filmCollection';
import Loader from '../Loader/Loader';
import css from './MovieCast.module.css'


const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';



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
          <li className={css.actorsList} key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              width="100"
            />

            <div className={css.nameStyle}>
              <strong>{actor.name}</strong>
              <p> as {actor.character}</p>
            </div>
          </li>
        ))
      ) : (
        <p>No cast information available.</p>
      )}
    </ul>
  );
};

export default MovieCast;
