const USER_SIGNUP = 'USER_SIGNUP';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
const GET_MOVIE = 'GET_MOVIE';

const initialState = {
  user: null,
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '382a3edb79msh62116fd0a3dd3b9p1f55dcjsndaca5b928def',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
  },
};

export const getMovie = (movie) => async (dispatch) => {
  const response = await fetch(`https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&language=en&query=${movie}`, options);
  const data = await response.json();
  dispatch({
    type: GET_MOVIE,
    payload: data.results[0],
  });
};

export const userSignup = (email, password) => ({
  type: USER_SIGNUP,
  payload: { email, password },
});

export const userLogin = (email, password) => ({
  type: USER_LOGIN,
  payload: { email, password },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movie: action.payload };
    case USER_SIGNUP:
      return { ...state, email: action.payload.email, password: action.payload.password };
    case USER_LOGIN:
      return { ...state, email: action.payload.email, password: action.payload.password };
    case USER_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
