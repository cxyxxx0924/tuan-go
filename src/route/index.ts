import home from "pages/home/index.vue";
import goods from "pages/goods/index.vue";
import search from "pages/search/index.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/goods",
    component: home,
    children: [
      {
        path: "/goods",
        component: goods,
        alias: "goods",
      },
    ],
  },
  {
    path: "/search",
    component: search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export { router };
