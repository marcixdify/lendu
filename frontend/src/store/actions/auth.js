import axios from 'axios';



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






