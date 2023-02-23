const GET_MOVIE = 'GET_MOVIE';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '382a3edb79msh62116fd0a3dd3b9p1f55dcjsndaca5b928def',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
  },
};

export const getMovie = () => async (dispatch) => {
  const response = await fetch('https://netflix54.p.rapidapi.com/title/details/?ids=80057281&lang=en', options);
  const data = await response.json();
  dispatch({
    type: GET_MOVIE,
    payload: data,
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
