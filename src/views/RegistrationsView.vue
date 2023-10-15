<template>
  <div class="about">
    <h1>Current Registrations</h1>
    <p>Register for current season <router-link to="/user_registration">here</router-link></p>
    <p>Regulars</p>
    <RegistrationsIndex
      :registrations="this.regularRegistrations"
    />
    <p>Subs</p>
    <RegistrationsIndex
      :registrations="this.subRegistrations"
    />
    <!-- <p>{{ ApiUtilities }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'RegistrationsView',
  components: {
    RegistrationsIndex
  },
  data () {
    return {
      registrations: '',
      um: 'hi'
    }
  },
  methods: {
    // methods
    async getRegistrations () {
      // console.log('token', this.user.token)
      await axios.get(process.env.VUE_APP_API_URL + '/user_registrations/1')
        .then(resp => { this.registrations = resp.data.data })
        // .then(resp => console.log('resp', JSON.stringify(resp.data.data)))
      console.log('aa', (_.filter(this.registrations, reg => reg.attributes.regular === true)))
    }
  },
  mounted () {
    this.getRegistrations()
    // debugger
  },
  computed: {
    regularRegistrations () {
      // return 'ha'
      return (_.filter(this.registrations, reg => reg?.attributes?.regular === true))
    },
    subRegistrations () {
      return (_.filter(this.registrations, reg => reg?.attributes?.regular === false))
    }
  }
}
</script>
