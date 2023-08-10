<template>
  <div class="user-profile">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>user profile</h3>

    <labe>firstName</labe>
    <input type="text" v-model="firstName"/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

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
  methods: {
    signUp () {
      console.log('call API', this.email)
    },
    async getUser () {
      console.log('hey get da user')
      // console.log('token', this.user.token)
      // const key = { key: 'club' }
      // await axios.get(process.env.VUE_APP_API_URL + '/user')
      //   .then(resp => { this.clubs = resp.data }
      //   )
    }
  }
}
</script>
