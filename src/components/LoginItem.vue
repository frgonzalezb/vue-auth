<template>
  <form action="">
    <h3>Login</h3>

    <div class="form-group">
      <label for="email-field">Email</label>
      <input type="email" id="email-field" class="form-control" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label for="password-field">Password</label>
      <input type="password" id="password-field" class="form-control" placeholder="Password"/>
    </div>

    <button class="btn btn-primary btn-block">
      Login
    </button>
  </form>
</template>



<script>
  export default {
    name: 'LoginItem'
  }
</script>
