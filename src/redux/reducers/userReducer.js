const USER_SIGNUP = 'USER_SIGNUP';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
  user: null,
};

export const userSignup = (user) => ({
  type: USER_SIGNUP,
  payload: user,
});

export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: user,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state, user: action.payload };
    case USER_LOGIN:
      return { ...state, user: action.payload };
    case USER_LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
