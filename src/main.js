import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
