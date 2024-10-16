import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';


function App() {

  return (
    <div>
      App
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="movies/:movieId/cast" element={<MovieCast />} />
        <Route path="movies/:movieId/reviews" element={<MovieReviews/>} />
      </Routes>
    </div>
  );
}

export default App
