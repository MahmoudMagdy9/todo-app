import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/show-todos",
    name: "ShowTodos",
    component: () => import("../views/ShowTodos.vue"),
    meta: {
      title: "Show Todos",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
