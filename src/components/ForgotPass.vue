<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="message" class="alert alert-success" role="alert">
      {{ message }}
    </div>
    
    <h3>Forgot password?</h3>

    <div class="form-group">
      <label for="recovery-email">Email</label>
      <input type="email" class="form-control" v-model="email" name="email-field" id="recovery-email" placeholder="Email">
    </div>

    <button class="btn btn-primary btn-block">
        Submit
    </button>
  </form>
</template> 



<script>
  // NOTA: Se recomienda usar MailCatcher para verificar si se obtiene email
  // al momento de hacer la petición desde el formulario, cuando se tenga
  // lista la funcionalidad desde el backend.

  // import axios from 'axios';

  export default {
    name: 'ForgotPass',
    methods: {
      async handleSubmit() {
        const data = {
          email: this.email
        }

        console.log(data);

        // const response = await axios.post('forgot', data);
        // console.log(response);
        
        this.message = 'The email was sent!';
      }
    },
    data() {
      return {
        email: '',
        message: ''
      }
    },
  }
</script>
