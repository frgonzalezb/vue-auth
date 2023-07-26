import { createRouter, createWebHistory } from "vue-router";

import HomeItem from '../components/HomeItem.vue'
import LoginItem from '../components/LoginItem.vue'
import RegisterItem from '../components/RegisterItem.vue'
import ForgotPass from '../components/ForgotPass.vue'
import ResetPass from '../components/ResetPass.vue'

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
  {
    path: "/forgot",
    name: "ForgotPass",
    component: ForgotPass,
  },
  {
    path: "/reset/:token",
    name: "ResetPass",
    component: ResetPass,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
