<template>
  <div id="app">
    <!-- Esto es para los v-if en NavbarItem.vue -->
    <!-- Usa "custom directives" (el :user="user") -->
    <!-- El ":user" es la directiva; el "user" es la data -->
    <!-- En realidad, la directiva está disponible para todos los componentes -->
    <NavbarItem :user="user"/>

    <div class="auth-wrapper">
      <div class="auth-inner">
        <!-- Esto es para los v-if en Home.vue -->
        <!-- Usa "custom directives" (el :user="user") -->
        <!-- El ":user" es la directiva; el "user" es la data -->
        <!-- En realidad, la directiva está disponible para todos los componentes -->
        <router-view :user="user"/>
      </div>
    </div>
  </div>
</template>



<script>
  // import axios from 'axios';
  import NavbarItem from './components/NavbarItem.vue'

  export default {
    name: 'App',
    components: {
      NavbarItem,
    },
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



<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

* {
  box-sizing: border-box;
}

body {
  background: #1c8ef9 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6, label, span {
  font-weight: 500;
}

body, html, #app, .auth-wrapper {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  transition: all .3s;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 10px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}
</style>
