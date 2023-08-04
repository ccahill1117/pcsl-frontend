<template>
  <div class="hi">
    <p>
      Sign up to register for current season
    </p>
    <!-- <p>drag and drop to reorder</p> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegistrationsIndex',
  props: {
    registrations: Array,
    someProp: String
  },
  methods: {
    async getRegistrations () {
      // console.log('token', this.user.token)
      await axios.get(process.env.VUE_APP_API_URL + '/registrations')
        .then(resp =>
          console.log('resp', resp)
        )
    }
  },
  mounted () {
    console.log('reg index mounted')
    this.getRegistrations()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
