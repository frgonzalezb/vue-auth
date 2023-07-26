<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <!-- If no user has logged in 👎 -->
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Sign-up</router-link>
          </li>
        </ul>
        <!-- If someone has logged in 👍 -->
        <ul class="navbar-nav ml-auto" v-if="user">
          <li class="nav-item">
            <!-- Usa javaScript:void(0) si, al hacer clic en un enlace, 
              no quieres que el navegador abra una nueva página o refresque 
              la página actual (dependiendo de la URL especificada). -->
            <a href="javascript:void(0)" @click="handleClic" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'NavbarItem',
    methods: {
      handleClic() {
        // Logout
        localStorage.removeItem('token');
        this.$store.dispatch('user', null);
        this.$router.push('/');
      }
    },
    computed: {
      // Obtener el getter del usuario
      ...mapGetters(['user'])
    }
  }
</script>
