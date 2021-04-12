 <template>
 <div class="mx-auto bg-info"
 style="max-width: 40rem; ">
<b-card
title="Login Form"
class="mt-4"
>
<b-form>

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

Don't you have an account?<router-link to="/Register">
              Register here</router-link
            >
<div class="mt-2">
  <b-button variant="primary">Login</b-button>
</div>
</b-form>
</b-card>
 </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
