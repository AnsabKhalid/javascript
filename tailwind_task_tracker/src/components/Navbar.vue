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

<style scoped></style>
