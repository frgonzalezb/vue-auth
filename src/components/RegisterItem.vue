<template>
  <form>
    <h3>Sign up</h3>

    <div class="form-group">
      <label for="fname-field">First name</label>
      <input type="text" id="fname-field" class="form-control" placeholder="First name"/>
    </div>

    <div class="form-group">
      <label for="lname-field">Last name</label>
      <input type="text" id="lname-field" class="form-control" placeholder="Last name"/>
    </div>

    <div class="form-group">
      <label for="email-field">Email</label>
      <input type="email" id="email-field" class="form-control" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label for="password-field">Password</label>
      <input type="password" id="password-field" class="form-control" placeholder="Password"/>
    </div>

    <div class="form-group">
      <label for="cpassword-field">Confirm password</label>
      <input type="password" id="cpassword-field" class="form-control" placeholder="Confirm password"/>
    </div>

    <button class="btn btn-primary btn-block">
      Sign up
    </button>
  </form>
</template>



<script>
  export default {
    name: 'RegisterItem'
  }
</script>
