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
    path: "/LoginDocente",
    name: "LoginDocente",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Auth/LoginDocente.vue"),
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/Avisos",
    name: "Avisos",
    component: () =>
      import(/* webpackChunkName: "Avisos" */ "../views/Avisos.vue"),
  },
  {
    path: "/Biblioteca",
    name: "Biblioteca",
    component: () =>
      import(/* webpackChunkName: "Biblioteca" */ "../views/Biblioteca.vue"),
  },
  {
    path: "/MiPortal",
    name: "MiPortal",
    component: () =>
      import(/* webpackChunkName: "Biblioteca" */ "../views/MiPortal.vue"),
  },
  {
    path: "/MiPerfil",
    name: "MiPerfil",
    component: () =>
      import(/* webpackChunkName: "Biblioteca" */ "../views/MiPerfil.vue"),
  },
  {
    path: "/AcercaDe",
    name: "AcercaDe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AcercaDe.vue"),
  },
  {
    path: "/ApartadoLegal",
    name: "ApartadoLegal",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/legal/ApartadoLegal.vue"
      ),
  },
  {
    path: "/Equipo",
    name: "Equipo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/legal/Equipo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
