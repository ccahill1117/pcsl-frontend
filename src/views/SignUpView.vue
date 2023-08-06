<template>
  <div class="sign-up">
    <h1>Sign up</h1>
    <div>
      <label>email</label>
      <input v-model="firstName">
    </div>
    <div>
      <label>last name</label>
      <input v-model="lastName">
    </div>
    <div>
      <label>address 1</label>
      <input v-model="address1">
    </div>
    <div>
      <label>address 2</label>
      <input v-model="address2">
    </div>
    <div>
      <label>state</label>
      <input v-model="state">
    </div>
    <div>
      <label>zip</label>
      <input v-model="zipCode">
    </div>
    <div>
      <label>email address</label>
      <input v-model="email">
    </div>
    <div>
      <label>phone</label>
      <input v-model="phone">
    </div>
    <div>
      <label>gender</label>
      <input v-model="gender">
    </div>
    <div>
      <label>date of birth</label>
      <input type="date" v-model="dateOfBirth">
    </div>
    <div>
      <label>US Squash ID</label>
      <input v-model="usSquashId">
    </div>
    <div>
      <label>club</label>
      <select v-model="selected">
        <option v-bind="(item, key) in clubs" :value="key">
          {{item?.name}}
        </option>
      </select>
    </div>
    <div>
      <button @click="signUp">Sign up</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
// import { ApiUtilities } from '../../utils/ApiUtilities.js'
import axios from 'axios'

export default {
  name: 'SignUpView',
  components: {
    // RegistrationsIndex
  },
  data () {
    return {
      // sign up data
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      state: '',
      zipCode: '',
      email: '',
      phone: '',
      gender: '',
      dateOfBirth: '',
      usSquashId: '',
      selected: null,

      // other
      clubs: []
    }
  },
  methods: {
    signUp () {
      console.log('call API', this.email)
    },
    async getClubs () {
      // console.log('token', this.user.token)
      // const key = { key: 'club' }
      await axios.get(process.env.VUE_APP_API_URL + '/clubs')
        .then(resp => { this.clubs = resp.data }
        )
    }
  },
  mounted () {
    this.getClubs()
  }
}
</script>

<style>
  label {
    display: inline-block;
    width: 150px;
    text-align: right;
  }
</style>
