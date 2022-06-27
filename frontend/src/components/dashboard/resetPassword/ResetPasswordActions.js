import axios from 'axios';


export const changePassword = (userData) => {
    return dispatch => {
        console.log(userData)
        axios.defaults.headers = {
          "Content-Type": "application/json",
          'Authorization': `Token ${localStorage.getItem('token')}`
          };    
        axios.put(`http://127.0.0.1:8000/api/auth/user/test/reset-password/`, userData)
        .then((res) => {
            console.log(res);


        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          })

    }
}