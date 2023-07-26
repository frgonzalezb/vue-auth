<template>
  <div>
    <h3 v-if="user">Hi, {{ user.firstName }}</h3>
    <h3 v-if="!user">You're not logged in!</h3>
  </div>
</template>



<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'HomeItem',
    computed: {
      // Obtener el getter del usuario
      ...mapGetters(['user'])
    }
  }
</script>
