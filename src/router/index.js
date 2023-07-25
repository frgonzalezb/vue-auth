import { createRouter, createWebHistory } from "vue-router";

import HomeItem from '../components/HomeItem.vue'
import LoginItem from '../components/LoginItem.vue'
import RegisterItem from '../components/RegisterItem.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeItem,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginItem,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
