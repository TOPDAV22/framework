<template>
  <div class="home">


  <p>Heyyyyyy welcome to our blog, check out our product  
      Testing if product data come with 200
  </p>
  </div>
</template>
<script>
import instance from '../../api'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },

  async created(){
    // testin if product come with 200 status
    const response = await instance.get('product/');
 console.log(response)
  }
 
}
</script>
