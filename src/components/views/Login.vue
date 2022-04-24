<template>
  <div class="login">
    <div>
      <form @submit.prevent="Handlelogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" name="username" v-model="username" />
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
  import axios from 'axios'

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
        const response = await axios.post('auth/login', {
          username: this.username,
          password: this.password
        })
      
   console.log('my data ',response.data.access)
        localStorage.setItem('token', response.data.access);
        this.$router.push('/Home')

      }
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

  button[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    cursor: pointer;
    border-radius: 30px;
  }

  button[type=submit]:hover {
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