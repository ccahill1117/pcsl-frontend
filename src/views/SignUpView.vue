<template>
  <div class="sign-up">
    <h1>Sign up</h1>
    <div class="sign-up-field">
      <label>First Name</label>
      <input v-model="firstName">
    </div>
    <div class="sign-up-field">
      <label>Last Name</label>
      <input v-model="lastName">
    </div>
    <div class="sign-up-field">
      <label>Address 1</label>
      <input v-model="address1">
    </div>
    <div class="sign-up-field">
      <label>Address 2</label>
      <input v-model="address2">
    </div>
    <div class="sign-up-field">
      <label>State</label>
      <input v-model="state">
    </div>
    <div class="sign-up-field">
      <label>Zip Code</label>
      <input v-model="zipCode">
    </div>
    <div class="sign-up-field">
      <label>Phone</label>
      <input v-model="phone">
    </div>
    <div class="sign-up-field">
      <label>Gender</label>
      <select id="gender" v-model="gender">
        <option v-for="item in genders" :value="item.id" :key="item.id">{{ item }}</option>
      </select>
    </div>
    <div class="sign-up-field">
      <label>US Squash ID</label>
      <input v-model="usSquashId">
    </div>

    <div class="sign-up-field">
      <label>Date of Birth</label>
      <input type="date" v-model="dateOfBirth">
    </div>
    <div class="sign-up-field">
      <label>club</label>
      <select id="club" v-model="club">
        <option v-for="item in clubs" :value="item.id" :key="item.id">{{ item.name }}</option>
      </select>
    </div>
    <div class="sign-up-field"></div>
    <div class="sign-up-field"></div>
    <div class="sign-up-field"></div>
    <div class="sign-up-field">
      <label>Email</label>
      <input v-model="email">
    </div>
    <div class="sign-up-field">
      <label>Password</label>
      <input v-model="password1">
    </div>
    <div class="sign-up-field">
      <label>Re-enter Password</label>
      <input v-model="password2">
    </div>
    <div class="sign-up-field">
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
      club: null,
      password1: '',
      password2: '',

      // other
      clubs: [],
      states: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      genders: ['Male', 'Female', 'Transgender', 'Non-Binary', 'Prefer not to say']
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
  .sign-up-field {
    padding-top: 10px
  }
</style>
