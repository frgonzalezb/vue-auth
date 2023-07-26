<template>
  <form @submit.prevent="handleSubmit">
    <h3>Reset password</h3>

    <div class="form-group">
      <label for="new-pw">Password</label>
      <input type="email" class="form-control" v-model="email" name="email-field" id="recovery-email" placeholder="Email">
    </div>

    <button class="btn btn-primary btn-block">
        Submit
    </button>
  </form>
</template>



<script>

</script>
