<template>
  <nav>
  </nav>
  <div class="app-footer-container">
    <div class="column-container">
      <div class="logo-login-container">
        <div class="logo-container">
          <img alt="Vue logo" src="./assets/header_bkgd_small.jpg">
        </div>

        <div>
          <div class="login-container" v-if="currentUserResponse == 401">
            <div>
              <div>
                <label>email</label>
                <input v-model="email">
              </div>
              <div>
                <label>password</label>
                <input type="password" v-model="password">
              </div>
            </div>
            <div class="login-button">
              <button @click="login">Login</button>
            </div>
          </div>
          <div class="login-container" v-if="currentUserResponse == 200">
            <p>{{this.user.user}} you're logged in</p>
            <div class="login-button">
              <button @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-content-container">
        <div class="left-nav">
          <div class="nav-item">
            <p><router-link to="/" class="router-link-class">Home</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/about" class="router-link-class">About</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/registrations" class="router-link-class">Reg</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/user_registration" class="router-link-class">Register Here!</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/sign_up" class="router-link-class">SignUp</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/login" class="router-link-class">Login</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/scores" class="router-link-class">Scores</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/scores_entry" class="router-link-class">Scores Entry</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/legal" class="router-link-class">Legal and Waiver</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/smigel_yusem" class="router-link-class">Smigel/Yusem Award</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/rules" class="router-link-class">Rules</router-link></p>
          </div>
          <div class="nav-item">
            <p><router-link to="/maps" class="router-link-class">Maps</router-link></p>
          </div>
        </div>
        <div class="content-col">
          <router-view/>
        </div>
      </div>
    </div>
    <div class="footer-contact">
      <p>Website 2.0 - Christopher Cahill</p>
    </div>

  </div>
</template>

<script>

import axios from 'axios'
import { mapMutations } from 'vuex'

console.log('env', process.env)
export default {
  watch: {
    $route (to, from) {
      console.log('route changed')
      this.getUser()
    }
  },
  data () {
    return {
      // response
      currentUserResponse: null
    }
  },
  mounted () {
    // this.getUser()
    console.log('user', this.user?.user)
  },
  computed: {
    user () {
      return this.$store.state
    }
  },
  methods: {
    ...mapMutations(['setUser', 'setToken', 'setUserId']),

    renderProfile () {
      return (
        <div><p>hi</p></div>
      )
    },

    async getUser () {
      console.log('token', this.user.token)
      await axios.get(process.env.VUE_APP_API_URL + '/current_user',
        {
          headers: {
            Authorization: this.user.token
          }
        }
      )
      // .then(resp => { this.clubs = resp.data }
        .then(resp => { this.currentUserResponse = resp?.status }

        )
        .catch(err => { this.currentUserResponse = err?.response?.status })
    },

    setUserAndToken (response) {
      console.log('resp', response)
      if (response != null) {
        this.setUser(response.data.data.email)
        this.setToken(response.headers.authorization)
        this.setUserId(response.data.data.id)
        // this.loginUser(response.data.data.email, response.headers.authorization)
      } else {
        this.setUser(null)
        this.setToken(null)
        this.setUserId(null)
      }
    },

    async login () {
      console.log(this.email, this.password)
      const user = { user: { email: this.email, password: this.password } }
      // const config = { withCredentials: true }
      await axios.post(process.env.VUE_APP_API_URL + '/login', user)
        .then(response => {
          this.setUserAndToken(response)
          this.currentUserResponse = 200
        })
    },
    async logout () {
      console.log('token', this.user.token)
      await axios.delete(process.env.VUE_APP_API_URL + '/logout',
        {
          headers: {
            Authorization: this.user.token
          }
        }
      )
      // .then(resp => { this.clubs = resp.data }
        .then(response => {
          this.setUserAndToken(null)
          this.currentUserResponse = 401
          console.log('uh', this.currentUserResponse)
        })
        .catch(err => console.log('err', err))
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.login-container {
  display: flex;
  flex-direction: row;
  color: white;
  /* height: 100%; */
  /* width: 100%; */
  /* align-items: baseline; */

}
.login-container-logged-out {
  display: inline-block;
  flex-direction: row;
}
.login-container-logged-out-item {
  display: inline-block;
  /* align-self: flex-end; */
  /* display: flex */
  border: 1px red solid;
}
.column-container {
  display: inline-block;
  flex-direction: column;
}
.logo-login-container {
  display: flex;
  flex-direction: row;
}
.logo-container {
  display: inline-block;
  align-self: flex-end;
}
.nav-content-container {
  display: flex;
}
.left-nav {
  width: 100px;
}
.nav-item {
  display: flex;
  background-image: url("./assets/navBG.png");
  color: yellow;
}

.router-link-class {
  color: yellow;
}
.content-col {
  padding: 15px;
  background-color: #e7c9a9;
  flex: 1 auto;
  width: 1000px;
}
.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  background-color: black;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

input {
  height: 15px;
}
button {
  margin-left: 20px;
}

.footer-contact {
  color: white;
  font-size: 12px;
  /* padding-right: 50px; */
  text-align: center;
}

</style>
