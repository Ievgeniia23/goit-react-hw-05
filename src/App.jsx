import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import css from './App.module.css'
import clsx from 'clsx'

import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


const buildCssClasses = ({ isActive }) => 
  clsx(css.link, isActive && css.active)




function App() {

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
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
