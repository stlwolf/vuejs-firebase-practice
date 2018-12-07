import App from "./App";
import Signin from "./Signin";
import Engineer from "./Mypage";
import NotFound from "./NotFound";

export default [
  {
    path: "/",
    name: "App",
    component: App
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
    meta: { requiresAuth: true }
  },
  { path: "*", component: NotFound }
];
