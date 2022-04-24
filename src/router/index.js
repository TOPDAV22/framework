import Vue from 'vue'
import Router from "vue-router"
import Home from '../components/views/Home'
import Register from '../components/views/Register'
import Login from '../components/views/Login'
import Posts from '../components/views/Posts'

Vue.use(Router)




export default new Router({
  mode: 'history',
  routes: [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
   
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
   
  },
  {
    path: "/",
    name: "Posts",
    component: Posts,
   
  },

]
})




