<template>
  <form @submit.prevent="handleSubmit">
    <error-alert v-if="error" :error="error"/>

    <h3>Sign up</h3>

    <div class="form-group">
      <label for="fname-field">First name</label>
      <input type="text" id="fname-field" v-model="firstName" class="form-control" placeholder="First name"/>
    </div>

    <div class="form-group">
      <label for="lname-field">Last name</label>
      <input type="text" id="lname-field" v-model="lastName" class="form-control" placeholder="Last name"/>
    </div>

    <div class="form-group">
      <label for="email-field">Email</label>
      <input type="email" id="email-field" v-model="email" class="form-control" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label for="password-field">Password</label>
      <input type="password" id="password-field" v-model="password" class="form-control" placeholder="Password"/>
    </div>

    <div class="form-group">
      <label for="cpassword-field">Confirm password</label>
      <input type="password" id="cpassword-field" v-model="confirmPassword" class="form-control" placeholder="Confirm password"/>
    </div>

    <button class="btn btn-primary btn-block">
      Sign up
    </button>
  </form>
</template>



<script>
  import axios from 'axios';
  import ErrorAlert from './ErrorAlert.vue';

  export default {
    name: 'RegisterItem',
    components: {
      ErrorAlert
    },
    methods: {
      async handleSubmit() {
        try {
          const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
          }

          // Esto es sólo de prueba, borrar después
          // console.log(data);

          // Esto es para la comunicación con el endpoint en el backend:
          const response = await axios.post('http://localhost:8000/register/', data);
          console.log(response);
          this.$router.push('http://localhost:8000/login/');
        
        } catch(error) {
          this.error = "Something's wrong!";
        }
      }
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
      }
    },
  }
</script>
