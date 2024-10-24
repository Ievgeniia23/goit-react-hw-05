import { Link } from 'react-router-dom';
// import clsx from 'clsx';

import css from './NotFoundPage.module.css'



// const buildCssClasses = ({ isActive }) =>
//   clsx(css.link, isActive && css.active);

const NotFoundPage = () => {
  return (
    <div className={css.notFoundWrapper}>
      <h1>404 - Page is not found</h1>
      <p>Unfortunately, this route does not exist</p>
      <Link to="/">Home</Link>
    </div>
  );
};
    // <div>
    //   {'buildCssClasses'}
    //   <NavLink className={buildCssClasses} to="/">
    //     Home
    //   </NavLink>
    // </div>
//   );
// };

export default NotFoundPage;
