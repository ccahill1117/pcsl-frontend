<template>
  <div class="about">
    <h1>Register Here for <u>Summer 2024</u></h1>
    <!-- <p>{{ ApiUtilities }}</p> -->
    <div v-if="submitSuccess === true">
      <p>thanks for registering!</p>
    </div>
    <div v-if="submitSuccess === false">
      <div v-if="user.token === null"><router-link to="/sign_up">Create account</router-link>, then login to register</div>
      <div v-if="user.token !== null">
        <div class="sign-up">
          <div class="sign-up-field">
            <label>Regular or Sub</label>
            <select id="" v-model="registration.regular">
              <option value="true">Regular</option>
              <option value="false">Sub</option>
            </select>
          </div>
          <div class="sign-up-field">
            <label>Volunteer as Captain</label>
            <select id="" v-model="registration.is_captain">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div class="sign-up-field">
            <label>Division</label>
            <select id="" v-model="registration.division">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="sign-up-field">
            <label>Rank</label>
            <select id="" v-model="registration.rank">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <hr />
          <div>
            <p class="legal"><strong>By registering with or participating in Portland City Squash League, the registrant / participant agrees to the following statement:</strong></p>
            <p class="legal"><i>&quot;I hereby for myself, my heirs, administrators, and personal representatives, waive and release any and all claims for damages that I may have against the Portland City Squash League, the Multnomah Athletic Club, Club Sport, the Lloyd Athletic Club, Sunset Athletic Club, Reed College or any other participating club and their representatives, successors and assigns for any and all injuries and damages of whatsoever kind or nature that I may suffer in conjunction with my participation in the Portland City Squash League.&quot;</i></p>
            <h3 style="color: black">Eye protection is MANDATORY</h3>
          </div>
          <hr />
          <div>
            Initial here that you have read the rules and waiver
          </div>
          <div>
            <input v-model="registration.initials">
          </div>
          <div>
            <div class="sign-up-field">
              <button :disabled="!registrationOk" @click="register">Sign up</button>
            </div>
            <div v-if="error !== false">
              error signing up - you may have already registered
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import RegistrationsIndex from '@/components/RegistrationsIndex.vue'
// import { ApiUtilities } from '../../utils/ApiUtilities.js'
import axios from 'axios'

export default {
  name: 'UserRegistrationView',
  components: {
    // RegistrationsIndex
  },
  mounted () {
    console.log('reg user', (this.user.userId))
  },
  computed: {
    user () {
      return this.$store.state
      // userId = this.user.userId
    },
    // check for forms filled
    registrationOk () {
      return (this.registration.regular !== '' && this.registration.is_captain !== '' && this.registration.division !== '' && this.registration.rank !== '' && this.registration.initials !== '')
    }
  },
  methods: {
    async register () {
      const registration = this.registration
      registration.user_id = this.user.userId
      console.log('call API data', registration)
      await axios.post(process.env.VUE_APP_API_URL + '/user_registrations', { registration },
        {
          headers: {
            Authorization: this.user.token
          }
        }).then(resp => { this.submitSuccess = true })
        .catch(err => { this.error = err })
    }
  },
  data () {
    return {
      // sign up data
      registration: {
        regular: '',
        is_captain: '',
        division: '',
        rank: '',
        initials: '',
        // currently just hardcoding szn id
        seasons_id: 5
      },
      submitSuccess: false,
      error: false
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
