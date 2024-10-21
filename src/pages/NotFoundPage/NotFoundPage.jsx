import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './NotFoundPage.module.css'




const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const NotFoundPage = () => {
  return (
    <div>
      {'buildCssClasses'}
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
