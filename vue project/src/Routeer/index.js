import { createWebHistory, createRouter } from "vue-router";
import home from "@/view/home.vue";
import about from "@/view/about.vue";
import help from "@/view/help.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/help",
    name: "help",
    component: help,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


