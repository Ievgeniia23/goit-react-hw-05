import axios from 'axios';



const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGJjZTJkODQ5ZWJjYTAxMzI4YThlMjAzNzUzZTUzOSIsIm5iZiI6MTcyOTA2NzQzMi4xMDQ1NDMsInN1YiI6IjY3MGUzZDhjMGI4MDA1MzdkNzVjZGU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3z60dqYaJCBFgwLCKMaHm8HwbNZcIV-3qN2psZr_jiE'
      
  },
};

axios.get(url, options)
    .then(response => console.log(response))
    .catch(err => console.error(err));
