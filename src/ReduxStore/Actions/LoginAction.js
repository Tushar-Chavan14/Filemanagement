import axios from "axios";

import {
  AUTHENTICATION_REQUEST_FAIL,
  AUTHENTICATION_REQUEST_SUCCESS,
  REQUEST_AUTHENTICATION,
} from "../Constant";

const token_genertion_Url = "http://intervc-api.shivila.tech/login/";

export const LoginAction = (credentials, navigate) => async (dispatch) => {
  dispatch({ type: REQUEST_AUTHENTICATION });

  await axios
    .post(token_genertion_Url, credentials)

    .then((res) => {
      navigate("/");
      const { data } = res;
      localStorage.setItem("token", data.token);

      return dispatch({
        type: AUTHENTICATION_REQUEST_SUCCESS,
        payload: {
          auth: true,
          token: data.token,
        },
      });
    })
    .catch((err) => {
      navigate("/login");
      return dispatch({
        type: AUTHENTICATION_REQUEST_FAIL,
        payload: {
          message: err,
        },
      });
    });
};
