const USER_SIGNUP = 'USER_SIGNUP';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
  user: null,
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
