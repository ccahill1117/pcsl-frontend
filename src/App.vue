<template>
  <nav>

  </nav>
  <img alt="Vue logo" src="./assets/header_bkgd_1100x45.png">
  <div class="column-container">
    <div class="left-nav">
      <p><router-link to="/">Home</router-link></p>
      <p><router-link to="/about">About</router-link></p>
      <p><router-link to="/registrations">Reg</router-link></p>
      <p><router-link to="/sign_up">SignUp</router-link></p>
      <p><router-link to="/login">Login</router-link></p>
    </div>
    <div class="content-col">
      <router-view/>
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
  display: flex;
  padding: 25px;
}
.left-nav {
  padding: 15px;
}
.content-col {
  padding: 15px;
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

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
