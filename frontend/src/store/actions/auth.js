import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const authStart = () => {
  return {
      type: actionTypes.AUTH_START
  }
}

export const authSuccess = token => {
  return {
      type: actionTypes.AUTH_SUCCESS,
      token: token
  }
}

export const authFail = error => {
  return {
      type: actionTypes.AUTH_FAIL,
      error: error
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
      type: actionTypes.AUTH_LOGOUT
  };
}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
      setTimeout(() => {
          dispatch(logout());
      }, expirationTime * 1000)
  }
}

export const authAddNotice = (form_data) => {

        axios
        .post("http://127.0.0.1:8000/api/notices/create/", form_data,{
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }

export const authEditNotice = (form_data, id) => {
console.log(form_data)
console.log(id)

      axios
      .put(`http://127.0.0.1:8000/api/notices/${id}/update/`, form_data,{
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  export const authDeleteNotice = (id) => {
    
    console.log(id)
    
          axios
          .delete(`http://127.0.0.1:8000/api/notices/${id}/delete/`,{
            headers: {
              'content-type': 'application/json'
            }
          })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      }


      export const authCheckState = () => {
        return dispatch => {
            const token = localStorage.getItem('token');
            if (token === undefined) {
                dispatch(logout());
            } else {
                const expirationDate = new Date(localStorage.getItem('expirationDate'));
                if ( expirationDate <= new Date() ) {
                    dispatch(logout());
                } else {
                    dispatch(authSuccess(token));
                    dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
                }
            }
        }
    }

  //   export const authEditNotice = (form_data) => {


  //     axios
  //     .put(`http://127.0.0.1:8000/api/notices/${id}/update/`, form_data,{
  //       headers: {
  //         'content-type': 'multipart/form-data'
  //       }
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       }
  //     });
  // }
