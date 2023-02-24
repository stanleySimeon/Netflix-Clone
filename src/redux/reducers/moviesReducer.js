const GET_MOVIE = 'GET_MOVIE';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '382a3edb79msh62116fd0a3dd3b9p1f55dcjsndaca5b928def',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
  },
};

export const getMovie = () => async (dispatch) => {
  fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
    .then((response) => response.json())
    .then((data) => {
      const movies = [];
      console.log(data);
      data.forEach((movie) => {
        movies.push({
          title: movie.title,
          year: movie.year,
          description: movie.description,
          image: movie.image,
          genre: movie.genre,
          rating: movie.rating,
          thumbnail: movie.thumbnail,
          trailer: movie.trailer,
          director: movie.director,
          writers: movie.writers,
        });
      });
      dispatch({
        type: GET_MOVIE,
        payload: movies,
      });
    });
};

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIE:
      return [...state, action.payload];
    default:
      return state;
  }
};
