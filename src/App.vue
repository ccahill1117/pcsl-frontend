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
          <p><router-link to="/" class="router-link">Home</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/about">About</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/registrations">Reg</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/sign_up">SignUp</router-link></p>
        </div>
        <div class="left-nav-item">
          <p><router-link to="/login">Login</router-link></p>
        </div>
      </div>
      <div class="content-col">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

console.log('env', process.env)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.column-container {
  display: inline-block;
  flex-direction: column;
  /* padding: 25px; */
  /* border: 1px solid green; */

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
  & > .router-link {
    display: block;
    color: yellow;
  }
}
.content-col {

  padding: 15px;
  background-color: #e7c9a9;
  width: 100%;
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

</style>
