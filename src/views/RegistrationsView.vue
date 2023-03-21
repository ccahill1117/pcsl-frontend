<template>
  <div class="about">
    <h1>Here we can see the registrations as they come in</h1>
    <RegistrationsIndex />
    <!-- <p>{{ ApiUtilities }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
import { ApiUtilities } from '../../utils/ApiUtilities.js'

export default {
  name: 'RegistrationsView',
  components: {
    RegistrationsIndex
  },
  methods () {
    // methods
  },
  mounted () {
    console.log('apiUtilities', ApiUtilities)
    console.log('reg index mounted')
  }
}
</script>
