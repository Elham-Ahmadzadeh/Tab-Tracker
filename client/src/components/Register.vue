 <template>
 <div class="mx-auto bg-info"
 style="max-width: 40rem; ">
<b-card
title="Register Form"
class="mt-4"
>
<b-form>
  <b-form-input
v-model="name"
id="input-1"
class="mt-3"
placeholder="Name"
></b-form-input>

<b-form-input
v-model="email"
id="input-1"
class="mt-3"
type="email"
placeholder="Email"
></b-form-input>

<b-form-input
id="input-2"
v-model="password"
placeholder="Password"
class="mt-3"
type="password"
></b-form-input>
<b-form-input
id="input-3"
type="password"
v-model="confirmPassword"
placeholder="Confirm Password"
class="mt-3"
></b-form-input>
  Already have an account?<router-link to="/login">
              Login here</router-link
            >
<div class="mt-2">
  <b-button variant="primary">Register</b-button>
</div>
</b-form>
</b-card>
 </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
}
</script>


