 
import { NavLink } from 'react-router-dom';
  
import css from './MovieList.module.css'

  const MovieList = ({ movies }) => {
    return (
      <ul className={css.listWrapper}>
        {movies.map(movie => (
          <li className={css.listItem} key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    );
  };



  

 

export default MovieList;
