<template>
  <div class="login">
    <h1>Login</h1>
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
  <div class="current-user">
    <button @click="getCurrentUser">get current user</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { mapMutations } from 'vuex'
// import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
// import { ApiUtilities } from '../../utils/ApiUtilities.js'

export default {
  name: 'LoginView',
  components: {
    // RegistrationsIndex
  },
  data () {
    return {
      email: 'admin@admin.com',
      password: 'password'
    }
  },
  methods: {
    ...mapMutations(['setUser', 'setToken']),
    async login () {
      console.log(this.email, this.password)
      const user = { user: { email: this.email, password: this.password } }
      // const config = { withCredentials: true }
      await axios.post(process.env.VUE_APP_API_URL + '/login', user)
        .then(response =>
          this.setUserAndToken(response)
        )
    },
    getCurrentUser () {
      console.log('user')
    },
    setUserAndToken (response) {
      console.log('resp', response)
      this.setUser(response.data.data.email)
      this.setToken(response.headers.authorization)
    }
  },
  mounted () {
  }
}
</script>

<style>
.current-user {
  border-width: 30;
  padding: 30px;
  border-color: white;
}
</style>
