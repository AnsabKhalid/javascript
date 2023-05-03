<template>
  <Navbar v-show="homePage" />

  <div
    class="container sm p-8 my-16 border-solid border-2 border-sky-500 rounded-lg"
  >
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  computed: {
    homePage() {
      if ((this.$route.path === "/Login") | (this.$route.path === "/SignUp")) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style></style>
