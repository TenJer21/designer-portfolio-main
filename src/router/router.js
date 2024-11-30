import { createRouter, createWebHistory } from "vue-router";
import Login from "../LoginPage.vue";
import Home from "../Home.vue"; // This would be the component for your current App.vue content

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
