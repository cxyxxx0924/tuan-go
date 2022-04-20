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
        meta: {
          keepAlive: true,
        },
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
  routes,
});

router.afterEach((to) => {
  // 一定要再afterEach中判断而不是beforeEach，因为beforeEach在点击返回之后获取到的值不准确，每返回一次，会获取到延后一次的to、history
  if (window.history.state && window.history.state.forward) {
    // 或者判断 to.forward,window.history.state.forward是vue-router写入的，当返回或前进的时候才会有值
    to.meta.isBack = true;
  } else {
    to.meta.isBack = false;
  }
});

export { router };
