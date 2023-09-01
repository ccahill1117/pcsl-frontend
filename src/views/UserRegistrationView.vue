<template>
  <div class="about">
    <h1>Register Here for Fall 2023</h1>
    <!-- <p>{{ ApiUtilities }}</p> -->
    <div v-if="user.token === null">Login to register</div>
    <div v-if="user.token !== null">
      <div class="sign-up">
        <div class="sign-up-field">
          <label>First Name</label>
          <input v-model="registration.regular">
        </div>
        <div class="sign-up-field">
          <label>Last Name</label>
          <input v-model="registration.is_captain">
        </div>
        <div class="sign-up-field">
          <label>Address 1</label>
          <input v-model="registration.division">
        </div>
        <div class="sign-up-field">
          <label>Address 2</label>
          <input v-model="registration.rank">
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
    console.log('reg user', (this.user.token != null))
  },
  computed: {
    user () {
      return this.$store.state
    }
  },
  methods: {
    async register () {
      const user = this.user
      console.log('call API data', { user })
      await axios.post(process.env.VUE_APP_API_URL + '/signup', { user }).then(resp => { console.log('res', resp) })
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
        initials: ''
      }
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
