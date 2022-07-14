<template>
  <div class="login">
    <div>
      <form @submit.prevent="Handlelogin">
        <div>
          <label for="username">email:</label>
          <input type="text" name="email" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <!-- <p v-if="showError" id="error">Username or Password is incorrect</p> -->
    </div>
  </div>
</template>


<script>
// import axios from 'axios';
import instance from "../../api";


export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
     async Handlelogin() {
  const response = await instance.post('login/', {
    username: this.username,
    password: this.password
  })

   console.log('my data ',response)
        localStorage.setItem('token', response.data.token);
        this.$router.push('/Home')



//   methods: {
//     async Handlelogin() {
//       const FormData = {
//         username: this.username,
//         password: this.password,
//       };
// await axios
//        .post("login/", FormData)
//          .then((response) => {
//            console.log(response)
//            const token = response.data.token
//            axios.defaults.headers.common['Authorization']= 'Token' +  token
//            localStorage.setItem('token', token)
            
            
//         })
//         .catch(error =>{
//           console.log(error)
        // })




        // await instance
      //   .post("login/", FormData)
      //   .then((response) => {
      //     console.log("res", response);
      //     localStorage.setItem("token", response.data.token);
      //   })

      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
};
</script>



<style scoped>
* {
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}

#error {
  color: red;
}
</style>