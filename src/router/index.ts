import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    children: [
      {
        path: "",
        name: "LoginHome",
        component: () => import("../views/login/Home.vue"),
        meta: { title: "蓝色星合-登录", requiresAuth: false },
      },
      {
        path: "register",
        name: "LoginRegister",
        component: () => import("../views/login/Register.vue"),
        meta: { title: "蓝色星合-注册", requiresAuth: false },
      },
      {
        path: "forget",
        name: "LoginForget",
        component: () => import("../views/login/Forget.vue"),
        meta: { title: "蓝色星合-忘记密码", requiresAuth: false },
      },
    ],
  },
  {
    path: "/",
    name: "DefaultLayout",
    component: () => import("../views/DefaultLayout.vue"),
    redirect: { path: "/home" },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: { title: "蓝色星合-首页概览", requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  document.title = to.meta.title || process.env.VUE_APP_TITLE;
});

export default router;
