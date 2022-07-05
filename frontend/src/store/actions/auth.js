import axios from "axios";
import * as actionTypes from "./ActionTypes";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  //toast("Pomyślnie zalogowano!");
  toast.success('Pomyślnie zalogowano!');
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
  
};

export const authFail = (error) => {
  toast.error("Błędny login lub hasło!");
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  toast.info("Pomyślnie wylogowano!");
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  logoutApi()
  
  
 
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};


export const logoutApi = () => {
  return dispatch => {
    console.log('tak')
      
      axios.defaults.headers = {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('token')}`
        };    
      axios.post('http://127.0.0.1:8000/api/auth/user/logout/')
      .then((res) => {
          console.log(res);
          localStorage.removeItem('token');
          localStorage.removeItem('expirationDate');

      })
      .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        })
        dispatch(logout())
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authAddNotice = (form_data) => {
  axios
    .post("http://127.0.0.1:8000/api/notices/create/", form_data, {
      headers: {
        "content-type": "multipart/form-data",
        'Authorization': `Token ${localStorage.getItem('token')}`
      },
    })
    .then((response) => {
      console.log(response);
      if(response.status == 201){
        toast("Pomyślnie dodano ogłoszenie!")
      }
    })
    .catch(function (error) {
      if (error.response) {
        toast.error("Coś poszło nie tak!")
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};

export const authEditNotice = (form_data, id) => {
  console.log(form_data);
  console.log(id);

  axios
    .put(`http://127.0.0.1:8000/api/notices/${id}/`, form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      if(response.status == 200){
      toast("Ogłoszenie zostało zmodyfikowane!")
      }
    })
    .catch(function (error) {
      if (error.response) {
        toast("Błąd podczas edycji.")
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};

export const authDeleteNotice = (id) => {
  console.log(id);

  axios
    .delete(`http://127.0.0.1:8000/api/notices/${id}/`, {
      headers: {
        "content-type": "application/json",
      },
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
};

export const authLogin = (userData) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/api/auth/user/login/", userData)
      .then((res) => {
        console.log(res)
        const token = res.data.token;
        const identifier = res.data.user.identifier;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("identifier", identifier);
        localStorage.setItem("expirationDate", expirationDate);

        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
        
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (userData) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/api/auth/user/register/", userData)
      .then((res) => {
        const token = res.data.token;
        console.log(token)
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        this.props.history.push("/dashboard");
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
