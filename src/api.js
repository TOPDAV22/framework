import axios from "axios";



const instance = axios.create({baseURL:'http://127.0.0.1:8000/api/'})

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');

    console.log('my token1', token)
   
    config.headers.common['Authorization'] = `token ${token}`;
    

    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type']='application/json'
     

    return config
},
function(error){
  console.log(error)
  Promise.reject(error)
});
export default instance;

// export default () => {
//     axios.defaults.baseURL = "http://127.0.0.1:8000/api";
//     axios.interceptors.request.use((req) => {
//       const token = localStorage.getItem("token");
//       req.headers.Authorization = `Token ${token}`;
  
//       return req;
//     });
  
//     axios.interceptors.response.use((response) => {
//       let data = response;
     
//       return data;
//     });
    
    // axios.interceptors.response.use((response) => {
    //   console.log(response);
    //   let data = response.data;
    //   return data;
    // });
  // };


  // console.log("works");



// axios.defaults.baseURL = "http://localhost:8000";
//   axios.interceptors.request.use((req) => {
//     const token = localStorage.getItem("token");
//     // console.log('my token',token)
//     req.headers.Authorization = `Bearer ${token}`;
//     return req;
//   });

//   axios.interceptors.response.use((response) => {
//     // let data = response.data;
//     return response;
//   });