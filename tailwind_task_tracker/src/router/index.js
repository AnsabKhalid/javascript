import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import Home from "../views/Home.vue";
import SignupForm from "../views/SignupForm.vue";
import LoginForm from "../views/LoginForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SignUp",
    name: "SignupForm",
    component: SignupForm,
  },
  {
    path: "/Login",
    name: "LoginForm",
    component: LoginForm,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
