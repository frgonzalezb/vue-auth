<template>
  <form @submit.prevent="handleSubmit">
    <h3>Reset password</h3>

    <div class="form-group">
      <label for="new-pw">Password</label>
      <input type="password" class="form-control" v-model="newPass" name="new-pw" id="new-pw" placeholder="Password">
    </div>

    <div class="form-group">
      <label for="confirm-new-pw">Confirm password</label>
      <input type="password" class="form-control" v-model="confirmNewPass" name="confirm-new-pw" id="confirm-new-pw" placeholder="Confirm password">
    </div>

    <button class="btn btn-primary btn-block">
        Submit
    </button>
  </form>
</template>



<script>
  import axios from 'axios';

  export default {
    name: 'ResetPass',
    methods: {
      async handleSubmit() {
        const data = {
          newPass: this.newPass,
          confirmNewPass: this.confirmNewPass,
          token: this.$route.params
        }

        // console.log(data);

        const response = await axios.post('reset', data);
        console.log(response);
        this.$router.push('http://localhost:8000/login/');
      }
    },
    data() {
      return {
        newPass: '',
        confirmNewPass: ''
      }
    },
  }
</script>
