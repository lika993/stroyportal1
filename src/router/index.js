import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tenders from "../views/Tenders.vue";
import Services from "../views/Services.vue";
import Contractors from "../views/Сontractors.vue";
import Profile from "../views/Profile.vue";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
 {
  path: "/",
  name: "Home",
  component: Home,
 },
 {
  path: "/tenders",
  name: "Tenders",
  component: Tenders,
 },
 {
  path: "/services",
  name: "Services",
  component: Services,
 },
 {
  path: "/contractors",
  name: "Contractors",
  component: Contractors,
 },
 {
  path: "/profile",
  name: "Profile",
  component: Profile,
 },
 {
  path: "/list",
  name: "List",
  component: List,
 }
]

const router = new VueRouter({
 mode: "history",
 routes
})

export default router;