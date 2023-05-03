<template>
  <div
    class="dark:bg-slate-800 text-white flex flex-wrap justify-between items-center p-2"
  >
    <h4 class="text-lg">
      <router-link to="/" class="px-4">Home</router-link>
      <router-link to="/About">About</router-link>
    </h4>
    <h4 class="text-lg">
      <a href="#" class="pr-4" @click="logout">Logout</a>
    </h4>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginForm" });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: rgb(33, 107, 33);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.nav .links {
  margin: auto;
}

.nav .links a {
  color: #fff;
  text-decoration: none;
  padding-right: 20px;
  font-size: 20px;
}

.nav .links a:hover {
  color: steelblue;
}
</style>
