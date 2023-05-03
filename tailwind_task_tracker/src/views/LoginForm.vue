<template>
  <h2 class="text-center font-poppins text-3xl pb-8 font-medium">
    Login Page
  </h2>
  <form class="flex flex-col items-center justify-center" @submit="loginUser">
    <input
      type="email"
      v-model="email"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:focus:border-blue-500"
      placeholder="name@flowbite.com"
      required
    />
    <input
      type="password"
      v-model="password"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:focus:border-blue-500"
      placeholder="Enter Password"
      required
    />
    <button
      type="submit"
      class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-950 w-96"
    >
      Login
    </button>
  </form>
  <p class="text-center pt-4 text-blue-600">
    <router-link to="/SignUp" class="text-xs font-bold">
      <h5>Don't have an account..Go to Sign up</h5>
    </router-link>
  </p>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser(e) {
      e.preventDefault();

      let result = await axios.get(
        `http://localhost:5000/users?email=${this.email}&password=${this.password}`
      );

      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
      console.log(result);

      (this.email = ""), (this.password = "");
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped></style>
