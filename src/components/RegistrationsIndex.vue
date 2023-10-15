<template>
  <div class="hi">
    <p>
      <!-- {{ _.filter (props.registrations, function(reg) {
          return reg.user
      }) }} -->
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
  },
  computed: {
  }
  // computed (props) {
  //   console.log('hihi', props.registrations)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
