<template>
  <div class="about">
    <h1>Current Registrations</h1>
    <p>Register for current season <router-link to="/user_registration">here</router-link></p>
    <h3>Regulars</h3>
    <RegistrationsIndex
      :registrations="this.regularRegistrations"
    />
    <h3>Subs</h3>
    <RegistrationsIndex
      :registrations="this.subRegistrations"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
// import { ApiUtilities } from '../../utils/ApiUtilities.js'
import axios from 'axios'
import _ from 'lodash'

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
        // .then(resp => { console.log('hihi', resp) })
        .then(resp => { this.registrations = resp.data.data })
      // .then(resp => console.log('resp', JSON.stringify(resp.data.data)))
      console.log('aa', this.data.registrations)
    }
  },
  mounted () {
    this.getRegistrations()
    // debugger
  },
  computed: {
    regularRegistrations () {
      return (_.filter(this.registrations, reg => reg?.attributes?.regular === true))
    },
    subRegistrations () {
      return (_.filter(this.registrations, reg => reg?.attributes?.regular === false))
    }
  }
}
</script>
