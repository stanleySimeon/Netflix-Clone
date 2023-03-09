/* eslint-disable max-len */
const SAVE_FEATURED = 'SAVE_FEATURED';
const GET_FEATURED = 'GET_FEATURED';

// Initial state
const initialState = {
  id: 0,
  title: 'Bitten',
  image: 'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
  year: '2014-01-11',
  rating: 6.5,
  summary: 'Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world&apos;s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever.With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.',
};

// save the featured movie to the store
export const saveFeatured = (movie = {}) => ({
  type: SAVE_FEATURED, payload: movie,
});

// get the featured movie from the store
export const getFeatured = (movie = {}) => ({
  type: GET_FEATURED,
  payload: movie,
});

// reducer for featured movie
export default function featuredMovieReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_FEATURED:
      return action.payload;
    case GET_FEATURED:
      return action.payload;
    default:
      return state;
  }
}
