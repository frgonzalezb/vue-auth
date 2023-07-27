<template>
  <form @submit.prevent="handleSubmit">
    <error-alert v-if="error" :error="error"/>
    
    <h3>Login</h3>

    <div class="form-group">
      <label for="email-field">Email</label>
      <input type="email" id="email-field" v-model="email" class="form-control" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label for="password-field">Password</label>
      <input type="password" id="password-field" v-model="password" class="form-control" placeholder="Password"/>
    </div>

    <button class="btn btn-primary btn-block">
      Login
    </button>

    <p class="forgot-password text-right">
      <router-link to="forgot">Forgot password?</router-link>
    </p>
  </form>
</template>



<script>
  import axios from 'axios';
  import ErrorAlert from './ErrorAlert.vue';

  export default {
    name: 'LoginItem',
    components: {
      ErrorAlert
    },
    methods: {
      async handleSubmit() {
        try {
          const data = {
          email: this.email,
          password: this.password
          }

          // Esto es sólo de prueba, borrar después
          console.log(data);

          // Esto es para la comunicación con el endpoint en el backend:
          const response = await axios.post('login', data);
          console.log(response);
          localStorage.setItem('token', response.data.token);
          // Esto es para despachar el evento que el usuario se ha logueado (al actions del store)
          this.$store.dispatch('user', response.data.user);
          this.$router.push('/login');
        } catch(error) {
          this.error = 'Invalid email/password!';
        }
      }
    },
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
  }
</script>
