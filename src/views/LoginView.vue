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
  <div class="fetch-user">
    <button @click="fetchCurrentUser">fetch current user</button>
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
      email: 'chris@test.com',
      password: 'password'
    }
  },
  // using computed to get from the store
  computed: {
    user () {
      return this.$store.state
    }
  },
  methods: {
    ...mapMutations(['setUser', 'setToken']),

    setUserAndToken (response) {
      console.log('resp', response)
      this.setUser(response.data.data.email)
      this.setToken(response.headers.authorization)
      // this.loginUser(response.data.data.email, response.headers.authorization)
    },

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
      console.log('user', this.user)
    },

    async fetchCurrentUser () {
      console.log('token', this.user.token)
      await axios.get(process.env.VUE_APP_API_URL + '/current_user',
        {
          headers: {
            Authorization: this.user.token
          }
        }
      )
        .then(resp =>
          console.log('resp', resp)
        )
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
