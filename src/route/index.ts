import home from "pages/home/index.vue";
import goods from "pages/goods/index.vue";
import search from "pages/search/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";
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
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export { router };
