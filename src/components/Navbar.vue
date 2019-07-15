<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/list">EventList</router-link> |
    <router-link to="/create">EventCreate</router-link> |
    <router-link :to="{ name: 'user', params: { username: 'ashu' } }">
      User
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
