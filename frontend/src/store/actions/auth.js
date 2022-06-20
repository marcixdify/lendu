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
