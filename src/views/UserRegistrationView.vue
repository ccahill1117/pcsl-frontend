<template>
  <div class="about">
    <h1>Register Here for Fall 2023</h1>
    <!-- <p>{{ ApiUtilities }}</p> -->
    <div v-if="user.token ==- null">Login to register</div>
    <div v-if="user.token !== null"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
// import { ApiUtilities } from '../../utils/ApiUtilities.js'

export default {
  name: 'UserRegistrationView',
  components: {
    // RegistrationsIndex
  },
  mounted () {
    console.log('reg user', (this.user.token != null))
  },
  computed: {
    user () {
      return this.$store.state
    }
  },
  methods () {
    // methods
  }
}
</script>
