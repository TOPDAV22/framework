<template>
  <div class="home">
  <p>Heyyyyyy welcome to our blog, check out our posts</p>
  </div>
</template>
<script>
import axios from 'axios';

// import instance from '../../api'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },

  async created(){
    const response = await axios.get('product');
    // const response = await axios.get("product")
 console.log(response)
  }
 
}
</script>
