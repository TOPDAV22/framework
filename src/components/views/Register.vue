<template>
  <div class="register">
      <div>
          <form @submit.prevent="handlesubmit" >
            <!-- <div>
              <label for="username">Username:</label>
              <input type="text" name="username" v-model="username">
            </div>
            <div>
              <label for="full_name">First Name:</label>
              <input type="text" name="first_name" v-model="first_name">
            </div>
            <div>
              <label for="last_name">last name:</label>
              <input type="text" name="last_name" v-model="last_name">
            </div> -->
            <div>
              <label for="email">email:</label>
              <input type="text" name="email" v-model="email">
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" name="password" v-model="password">
            </div>
            <button type="submit"> Submit</button>
          </form>
      </div>
      <!-- <p v-if="showError" id="error">Username already exists</p> -->
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: "Register",
  components: {},
  data() {
    return {
     email:'',
     password:''

    };
  },
  methods: {
    
   async handlesubmit() {
      await axios.post('api/user_accounts/register/',  { username:this.username,
     email: this.email,
     password:this.password
      });

     

      
     
      this.$router.push('/login')
      
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
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
}
#error {
  color: red;
}
</style>

