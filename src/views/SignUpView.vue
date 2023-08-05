<template>
  <div class="sign-up">
    <h1>Sign up</h1>
    <!-- <RegistrationsIndex /> -->
    <div>
      <label>email</label>
      <input v-model="firstName">
    </div>
    <div>
      <label>password</label>
      <input v-model="lastName">
    </div>
    <div>
      <label>club</label>
      <select v-model="selected">
        <option v-for="(item, key) in clubs" :value="key">
          {{item?.name}}
        </option>
      </select>
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
      // sign up data
      firstName: '',
      lastName: '',
      email: '',
      selected: null,

      // other
      clubs: []
    }
  },
  methods: {
    signUp () {
      console.log('call API', this.email)
    },
    async getClubs () {
      // console.log('token', this.user.token)
      const key = { key: 'club' }
      await axios.get(process.env.VUE_APP_API_URL + '/clubs')
        .then(resp =>
          this.clubs = resp.data
        )
    }
  },
  mounted () {
    this.getClubs()
  }
}
</script>
