<template>
  <div class="sign-up">
    <h1>Sign up</h1>
    <!-- <RegistrationsIndex /> -->
    <input>
    <input>
    <button @click="signUp">Sign Up</button>
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
  methods: {
    signUp () {
      console.log('call API')
    }
  },
  mounted () {
  }
}
</script>
