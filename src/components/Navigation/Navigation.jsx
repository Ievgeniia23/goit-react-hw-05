// components/Navigation/Navigation.jsx
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './navigat.module.css';


const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
    return (
       <div>
      <header className={css.header}>
    <nav>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      <NavLink className={buildCssClasses} to="/movies">
        Movies
      </NavLink>
    </nav>
      </header>
        </div>
  );
};

export default Navigation;
