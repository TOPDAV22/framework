import axios from "axios";

// axios.defaults.baseURL = 'http://127.0.0.1:8000' 

// axios.interceptors.request.use((req) =>{
//     var token = localStorage.getItem('token');

//     console.log('my token', token)

//     req.headers.Authorization =`Bearer ${token}`;
//    return req
//    });
  
axios.defaults.baseURL = "http://localhost:8000";
  axios.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    // console.log('my token',token)
    req.headers.Authorization = `Bearer${token}`;
    return req;
  });

  axios.interceptors.response.use((response) => {
    // let data = response.data;
    return response;
  });