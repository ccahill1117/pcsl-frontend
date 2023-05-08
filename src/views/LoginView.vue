<template>
  <div class="sign-up">
    <h1>Sign up</h1>
    <!-- <RegistrationsIndex /> -->
    <div>
      <label>email</label>
      <input :value="email">
    </div>
    <div>
      <label>password</label>
      <input :value="password">
    </div>
    <div>
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
// import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
// import { ApiUtilities } from '../../utils/ApiUtilities.js'

export default {
  name: 'LoginView',
  components: {
    // RegistrationsIndex
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      axios.get(process.env.VUE_APP_API_URL)
    }
  },
  mounted () {
  }
}
</script>
