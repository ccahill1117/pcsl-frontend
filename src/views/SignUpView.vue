<template>
  <div class="sign-up">
    <h1>Sign up</h1>
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
      <button @click="signUp">Sign up</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
// import { ApiUtilities } from '../../utils/ApiUtilities.js'
import axios from 'axios'

export default {
  name: 'SignUpView',
  components: {
    // RegistrationsIndex
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  methods: {
    signUp () {
      console.log('call API', this.email)
    },
    async getClubs () {
      // console.log('token', this.user.token)
      const key = { key: 'club' }
      await axios.post(process.env.VUE_APP_API_URL + '/dropdown_options', key)
        .then(resp =>
          console.log('resp', resp)
        )
    }
  },
  mounted () {
    this.getClubs()
  }
}
</script>
