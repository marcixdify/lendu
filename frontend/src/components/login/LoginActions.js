// import axios from "axios";
// import { push } from "connected-react-router";
// import { toast } from "react-toastify";
// import { SET_TOKEN, SET_CURRENT_USER } from "./LoginTypes";
// import { setAxiosAuthToken, toastOnError } from "../../utils/Utils";
// import * as actionTypes from '../../store/actions/ActionTypes';



// export const authStart = () => {
//     return {
//         type: actionTypes.AUTH_START
//     }
// }

// export const authSuccess = token => {
//     return {
//         type: actionTypes.AUTH_SUCCESS,
//         token: token
//     }
// }

// export const authFail = error => {
//     return {
//         type: actionTypes.AUTH_FAIL,
//         error: error
//     }
// }

// export const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('expirationDate');
//     return {
//         type: actionTypes.AUTH_LOGOUT
//     };

// }

// export const login = (userData, redirectTo) => dispatch => {
//   axios
//     .post("http://127.0.0.1:8000/api/auth/user/login/", userData)
//     .then(response => {
//       const auth_token  = response.data.token;
//       setAxiosAuthToken(auth_token);
//       dispatch(setToken(auth_token));
//       dispatch(getCurrentUser(redirectTo));
      
//       dispatch(authSuccess(auth_token));
//       dispatch(checkAuthTimeout(3600));
//     })
//     .catch(error => {
//       toastOnError(error);
//     });
// };

// export const checkAuthTimeout = expirationTime => {
//   return dispatch => {
//       setTimeout(() => {
//           dispatch(logout());
//       }, expirationTime * 1000)
//   }
// }

// export const getCurrentUser = redirectTo => dispatch => {

//   axios
//     .get("http://127.0.0.1:8000/api/auth/user/test/", axios.defaults.headers.common,)
//     .then(response => {
//       const user = {
//         //username: response.data.username,
//         email: response.data.email
//       };
//       dispatch(setCurrentUser(user, redirectTo));
//     })
//     .catch(error => {
//       toastOnError(error);
//     });
// };

// export const setCurrentUser = (user, redirectTo) => dispatch => {
//   localStorage.setItem("user", user.email);
//   dispatch({
//     type: SET_CURRENT_USER,
//     payload: user
//   });

//   console.log("set user" + redirectTo);
//   if (redirectTo !== "") {
//     dispatch(push(redirectTo));
//   }
// };

// export const setToken = token => dispatch => {
//   setAxiosAuthToken(token);
//   localStorage.setItem("token", token);
//   dispatch({
//     type: SET_TOKEN,
//     payload: token
//   });
// };

