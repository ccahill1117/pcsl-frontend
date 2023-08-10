<template>
  <div class="user-profile">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>user profile</h3>

    <labe>firstName</labe>
    <input type="text" v-model="firstName"/>
    <labe>lastName</labe>
    <input type="text" v-model="lastName"/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'UserProfileView',
  components: {
    // HelloWorld
  },
  data () {
    return {
      // sign up data
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      state: '',
      zipCode: '',
      email: '',
      phone: '',
      gender: '',
      dateOfBirth: '',
      usSquashId: '',
      selected: null,

      // other
      clubs: []
    }
  },
  mounted () {
    this.getUser()
  },
  computed: {
    user () {
      return this.$store.state
    }
  },
  methods: {
    signUp () {
      console.log('call API', this.email)
    },
    async getUser () {
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
  }
}
</script>
