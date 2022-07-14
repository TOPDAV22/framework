<template>
  <div id="nav">
    <router-link to="/Home">Home</router-link> |
    <router-link to="/">Posts</router-link> |
    <span> 
    </span>
    <span >
      <router-link  to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  computed : {
     
    },
    methods: {
     
    },
}
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
