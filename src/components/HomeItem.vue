<template>
  <h3>Hello!</h3>
</template>



<script>
  // import axios from 'axios';

  export default {
    name: 'HomeItem',
    async created() {
      const headers = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }

      const response = await axios.get('user', headers);

      console.log(response);
    }
  }
</script>
