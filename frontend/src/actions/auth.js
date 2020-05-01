
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import axios from "axios";
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
