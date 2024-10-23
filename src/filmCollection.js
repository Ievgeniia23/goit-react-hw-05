import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/', 
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGJjZTJkODQ5ZWJjYTAxMzI4YThlMjAzNzUzZTUzOSIsIm5iZiI6MTcyOTY1NTQ4MS40MDkwNTUsInN1YiI6IjY3MGUzZDhjMGI4MDA1MzdkNzVjZGU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZLxpmCnUny7vawYZf10X9KPTRf8FtYTG0nKawjU5pc',
    'Content-Type': 'application/json', 
  },
  params: {
    include_adult: false, 
    language: 'en-US', 
  },
});


export const fetchMovies = async (searchQuery, page = 1) => {
  try {
    const response = await axiosInstance.get('search/movie', {
      params: {
        query: searchQuery,
        page: page,
      },
    });

    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};


export const fetchPopularMovies = async () => {
  try {
    const response = await axiosInstance.get('movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};




