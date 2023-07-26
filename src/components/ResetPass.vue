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

</script>
