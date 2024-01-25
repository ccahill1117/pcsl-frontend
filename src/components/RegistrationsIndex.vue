<template>
  <div class="hi">
    <div class="hi">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Captain?</th>
          <th>Division</th>
          <th>Rank</th>
        </tr>
        <tr v-for="reg in this.registrations" :key="reg.id">
          <td>{{ reg.attributes.user.first_name }}</td>
          <td>{{ reg.attributes.user.last_name }}</td>
          <td>{{ reg.attributes.is_captain }}</td>
          <td>{{ reg.attributes.division }}</td>
          <td>{{ reg.attributes.rank }}</td>
        </tr>
      </table>
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
    console.log('regs on index', this.registrations)
  },
  computed: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  */
</style>
