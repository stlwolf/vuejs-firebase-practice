import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

import routes from "./router";
import config from "./firebaseConfig";
import App from "./App";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !firebase.auth().currentUser) {
    next({ path: "/signin", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

new Vue({
  el: "#app",
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      const path = user ? "/mypage" : "/signin";
      this.$router.push(path);
    });
  },
  render: h => h(App)
});
