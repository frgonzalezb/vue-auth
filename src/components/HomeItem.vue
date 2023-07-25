<template>
  <div>
    <h3 v-if="user">Hi, {{ user.firstName }}</h3>
    <h3 v-if="!user">You're not logged in!</h3>
  </div>
</template>



<script>
  // props (properties) se usa aquí para los "custom directives" de App.vue
  export default {
    name: 'HomeItem',
    props: ['user']
  }
</script>
