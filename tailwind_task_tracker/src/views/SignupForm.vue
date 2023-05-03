<template>
  <h2 class="text-center font-poppins text-3xl pb-8 font-medium">
    Sign Up Page
  </h2>
  <form
    class="flex flex-col items-center justify-center"
    @submit="registerUser"
  >
    <input
      type="text"
      v-model="username"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:focus:border-blue-500"
      placeholder="Enter Username"
      required
    />
    <input
      type="email"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:focus:border-blue-500"
      v-model="email"
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
      Sign Up
    </button>
  </form>
  <p class="text-center pt-4 text-blue-600">
    <router-link to="/Login" class="text-xs font-bold">
      <h5>Already have an account..Go to Login</h5>
    </router-link>
  </p>
</template>

<script>
import axios from "axios";

export default {
  name: "SignupForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async registerUser(e) {
      e.preventDefault();

      let result = await axios.post("http://localhost:5000/users", {
        username: this.username,
        email: this.email,
        password: this.password,
      });

      console.log(result);
      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        alert("Your account has been created..");
        this.$router.push({ name: "Home" });
      }

      (this.username = ""), (this.email = ""), (this.password = "");
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

<style></style>
