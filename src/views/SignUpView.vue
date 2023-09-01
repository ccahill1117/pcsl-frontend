<template>
  <div class="sign-up">
    <h1>Sign up</h1>
    <div class="sign-up-field">
      <label>First Name</label>
      <input v-model="user.first_name">
    </div>
    <div class="sign-up-field">
      <label>Last Name</label>
      <input v-model="user.last_name">
    </div>
    <div class="sign-up-field">
      <label>Address 1</label>
      <input v-model="user.address_1">
    </div>
    <div class="sign-up-field">
      <label>Address 2</label>
      <input v-model="user.address_2">
    </div>
    <div class="sign-up-field">
      <label>State</label>
      <select id="state" v-model="user.state">
        <option v-for="item in states" :value="item.id" :key="item.id">{{ item }}</option>
      </select>
    </div>
    <div class="sign-up-field">
      <label>Zip Code</label>
      <input v-model="user.zip_code">
    </div>
    <div class="sign-up-field">
      <label>Phone</label>
      <input v-model="user.phone">
    </div>
    <div class="sign-up-field">
      <label>Gender</label>
      <select id="gender" v-model="user.gender">
        <option v-for="item in genders" :value="item.id" :key="item.id">{{ item }}</option>
      </select>
    </div>
    <div class="sign-up-field">
      <label>US Squash ID</label>
      <input v-model="user.us_squash_id">
    </div>

    <div class="sign-up-field">
      <label>Date of Birth</label>
      <input type="date" v-model="user.date_of_birth">
    </div>
    <div class="sign-up-field">
      <label>club</label>
      <select id="club" v-model="user.club">
        <option v-for="item in clubs" :value="item.id" :key="item.id">{{ item.name }}</option>
      </select>
    </div>
    <div class="sign-up-field"></div>
    <div class="sign-up-field"></div>
    <div class="sign-up-field"></div>
    <div class="sign-up-field">
      <label>Email</label>
      <input v-model="user.email">
    </div>
    <div class="sign-up-field">
      <label>Password</label>
      <input type="password" v-model="user.password">
    </div>
    <div class="sign-up-field">
      <label>Re-enter Password</label>
      <input type="password" v-model="user.password2">
    </div>
    <div class="sign-up-field">
      <button :disabled="!passwordsOk" @click="signUp">Sign up</button>
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
      user: {
        first_name: 'chris',
        last_name: '',
        address_1: '',
        address_2: '',
        state: '',
        zip_code: '',
        email: 'cthomascahill@gmail.com',
        phone: '',
        gender: '',
        date_of_birth: '',
        us_squash_id: '',
        selected: null,
        club: null,
        password: 'tester',
        password2: 'tester'
      },

      // other
      clubs: [],
      states: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      genders: ['Male', 'Female', 'Transgender', 'Non-Binary', 'Prefer not to say']
    }
  },
  methods: {
    async signUp () {
      const user = this.user
      console.log('call API data', { user })
      await axios.post(process.env.VUE_APP_API_URL + '/signup', { user }).then(resp => { console.log('res', resp) })
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
  },
  computed: {
    passwordsOk () {
      return (this.user.password !== '' && this.user.password2 !== '' && this.user.password.length >= 8 && this.user.password2.length >= 8 && this.user.password === this.user.password2)
    }
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
  input {
    border: 0px;
    margin-left: 5px;
  }
  select {
    margin-left: 5px;
  }
</style>
