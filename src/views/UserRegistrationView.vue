<template>
  <div class="about">
    <h1>Register Here for Fall 2023</h1>
    <!-- <p>{{ ApiUtilities }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
import { ApiUtilities } from '../../utils/ApiUtilities.js'

export default {
  name: 'UserRegistrationView',
  components: {
    // RegistrationsIndex
  },
  methods () {
    // methods
  },
  mounted () {
    console.log('apiUtilities', ApiUtilities)
    // console.log('reg index mounted')
  }
}
</script>
