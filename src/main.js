import Vue from 'vue'
import App from './App.vue'
import router from './router';
// import interceptors from './api'



Vue.config.productionTip = false 
// Vue.use(interceptors)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
