import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchMovies = async (searchQuery, page = 1) => {

  const options = {
    headers: {
         Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGJjZTJkODQ5ZWJjYTAxMzI4YThlMjAzNzUzZTUzOSIsIm5iZiI6MTcyOTA2NzQzMi4xMDQ1NDMsInN1YiI6IjY3MGUzZDhjMGI4MDA1MzdkNzVjZGU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3z60dqYaJCBFgwLCKMaHm8HwbNZcIV-3qN2psZr_jiE',
    },
    params: {
      query: searchQuery,
      include_adult: false,
      language: 'en-US',
      page: page,
    },
  };

  const response = await axios.get('search/movie', options);


  console.log(response.data);
  return response.data.results;
};

export default fetchMovies;






