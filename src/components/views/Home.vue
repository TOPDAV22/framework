<template>
  <div class="home">
  <p>Heyyyyyy welcome to our blog, check out our posts</p>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },

  async created(){
    const response = await axios.get('/article_list');
 console.log(response)
  }
 
}
</script>
