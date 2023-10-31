<template>
  <div class="hi">
    <div v-for="reg in this.registrations" :key="reg.id">
      <p>
        {{ reg.attributes.user.first_name }}, {{ reg.attributes.user.last_name }}
      </p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'RegistrationsIndex',
  props: ['registrations'],
  data () {
  },
  methods: {
  },
  mounted () {
    console.log('aaaasdkahjsd', this.registrations)
  },
  computed: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
