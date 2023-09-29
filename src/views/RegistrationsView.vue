<template>
  <div class="about">
    <h1>Current Registrations</h1>
    <p>Register for current season <router-link to="/user_registration">here</router-link></p>
    <RegistrationsIndex
      :registrations="this.registrations"
    />
    <!-- <p>{{ ApiUtilities }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
import { ApiUtilities } from '../../utils/ApiUtilities.js'

export default {
  name: 'RegistrationsView',
  components: {
    RegistrationsIndex
  },
  data () {
    return {
      registrations: [],
      um: 'hi'
    }
  },
  methods: {
    // methods
    async getRegistrations () {
      // console.log('token', this.user.token)
      await axios.get(process.env.VUE_APP_API_URL + '/user_registrations/1')
        .then(resp =>
        // { this.registrations = resp.data }
          debugger
          // console.log('resp', resp)
        )
    }
  },
  mounted () {
    console.log('apiUtilities', ApiUtilities)
    // console.log('reg index mounted')
    this.getRegistrations()
  }
}
</script>
