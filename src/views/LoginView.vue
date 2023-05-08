<template>
  <div class="login">
    <h1>Login</h1>
    <!-- <RegistrationsIndex /> -->
    <div>
      <label>email</label>
      <input v-model="email">
    </div>
    <div>
      <label>password</label>
      <input v-model="password">
    </div>
    <div>
      <button @click="login">Login</button>
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
    login () {
      console.log(this.email, this.password)
      const user = { user: { email: this.email, password: this.password } }
      axios.post(process.env.VUE_APP_API_URL + '/login', user)
        .then(response => console.log('resp', response))
    }
  },
  mounted () {
  }
}
</script>
