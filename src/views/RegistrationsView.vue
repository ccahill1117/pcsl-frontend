<template>
  <div class="about">
    <h1>Here we can see the registrations as they come in</h1>
    <RegistrationsIndex />
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationsIndex from '@/components/RegistrationsIndex.vue'

export default {
  name: 'RegistrationsView',
  components: {
    RegistrationsIndex
  }
}
</script>
