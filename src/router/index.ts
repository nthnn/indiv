import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Questions.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/questions",
      name: "questions",
      component: () => import("../views/Questions.vue"),
    },
  ],
});

export default router;
