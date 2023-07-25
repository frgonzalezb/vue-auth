<template>
  <div>
    <h3 v-if="user">Hi, {{ user.firstName }}</h3>
    <h3 v-if="!user">You're not logged in!</h3>
  </div>
</template>



<script>
  // import axios from 'axios';

  export default {
    name: 'HomeItem',
    data() {
      return {
        user: null
      }
    },
    // async created() {
    //   const response = await axios.get('user');

    //   console.log(response);

    //   this.user = response.data;
    // }
  }
</script>
