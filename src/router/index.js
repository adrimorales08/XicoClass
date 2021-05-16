import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Auth/Login.vue"),
  },

  {
    path: "/Home",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },

  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Biblioteca",
    name: "Biblioteca",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Biblioteca.vue"),
  },
  {
    path: "/avisos",
    name: "avisos",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/avisos.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
