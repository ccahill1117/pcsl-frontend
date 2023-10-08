<template>
  <div class="hi">
    <p>
      Current Registrations coming soon
      <!-- {{ _.filter (this.registrations, function(reg) {
          return reg.user
      }) }} -->
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
    // console.log('hihi', this.registrations)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
