<template>
  <div class="hi">
    <div v-for="reg in this.registrations" :key="reg.id">
      <p>
        {{ reg.attributes.user.first_name }}, {{ reg.attributes.user.last_name }} cpt? {{ reg.attributes.is_captain }}
      </p>
    </div>
    <div>
      <v-table :data="this.registrations">
    <thead slot="head">
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Address</th>
    </thead>
    <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.id">
          <td>{{ row.name }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.email }}</td>
          <td>
              {{ row.address.street }},
              {{ row.address.city }}
              {{ row.address.state}}
          </td>
        </tr>
    </tbody>
  </v-table>
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
