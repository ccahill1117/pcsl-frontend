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

export default {
  name: 'SignUpView',
  components: {
    // RegistrationsIndex
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      console.log('call API', this.email)
    }
  },
  mounted () {
  }
}
</script>
