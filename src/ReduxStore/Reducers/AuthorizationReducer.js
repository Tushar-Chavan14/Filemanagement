import {
  AUTHENTICATION_REQUEST_FAIL,
  AUTHENTICATION_REQUEST_SUCCESS,
  LOGOUT,
  REQUEST_AUTHENTICATION,
} from "../Constant";

const intialState = {
  authenticated: false,
  token: "",
  user_id:"",
  message: "",
  isLoading: false,
};

export const authorizationReducer = (state = intialState, action) => {
  switch (action.type) {
    case REQUEST_AUTHENTICATION:
      return {
        isLoading: true,
      };

    case AUTHENTICATION_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        authenticated: action.payload.auth,
        token: action.payload.token,
        user_id:action.payload.user,
        message: "Authorized user",
      };

    case AUTHENTICATION_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        message: action.payload.message,
      };
    case LOGOUT:
      return {
        ...state,
        message: "logging Out",
        authenticated: false,
        token: "",
      };
    default:
      return state;
  }
};
