 
import { NavLink, useLocation } from 'react-router-dom';
  
import css from './MovieList.module.css'

import clsx from 'clsx';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const MovieList = ({ movies }) => {
    const location = useLocation()
    return (
      <ul className={css.listWrapper}>
        {movies.map(movie => (
          <li className={css.listItem} key={movie.id}>
            <NavLink
              className={buildCssClasses}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };



  

 

export default MovieList;
