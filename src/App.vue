<template>
  <nav>

  </nav>
  <div class="column-container">
      <div class="left-nav-item">
        <img alt="Vue logo" src="./assets/header_bkgd_1100x45.png">
      </div>
    <div class="nav-content-container">
      <div class="left-nav">
        <div class="left-nav-item">
          <p><router-link to="/" class="router-link-class">Home</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/about" class="router-link-class">About</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/registrations" class="router-link-class">Reg</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/sign_up" class="router-link-class">SignUp</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/login" class="router-link-class">Login</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/scores" class="router-link-class">Scores</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/scores_entry" class="router-link-class">Scores Entry</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/legal" class="router-link-class">Legal and Waiver</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/smigel_yusem" class="router-link-class">Smigel/Yusem Award</router-link></p>
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
</template>

<script>

console.log('env', process.env)

// import { ref, watch } from 'vue'

export default {
  watch: {
    $route: function (to, from) {
      // function here check if logged in ?
      console.log('route')
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
  /* color: white; */
}
.column-container {
  display: inline-block;
  flex-direction: column;
  /* padding: 25px; */

}
.nav-content-container {
  display: flex;
}
.left-nav {
  width: 100px;
}
.left-nav-item {
  display: flex;
  background-image: url("./assets/navBG.png");
  color: yellow;
}

.router-link-class {
  /* display: block; */
  color: yellow;
}
.content-col {
  padding: 15px;
  background-color: #e7c9a9;
  /* width: 100%; */
  flex: 1 auto;
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

.footer-contact {
  float: right;
  color: white;
  font-size: 12px;
  /* border: 1px solid green; */
  padding-right: 50px;
}

</style>
