<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sport">Sport</router-link> |
      <router-link to="/programming">Programming</router-link> |
      <router-link to="/science">Science</router-link> |
      <router-link to="/travel">Travel</router-link> |
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid green;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
