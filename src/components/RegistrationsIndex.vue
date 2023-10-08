<template>
  <div class="hi">
    <p>
      Current Registrations coming soon
      {{ this.registrations }}
    </p>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'RegistrationsIndex',
  props: {
    registrations: Array,
    someProp: String
  },
  data () {
  },
  methods: {
  },
  mounted () {
    console.log('reg index mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
