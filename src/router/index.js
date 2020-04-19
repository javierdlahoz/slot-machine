import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PlayForFun',
    component: App
  },
  {
    path: '/:token?',
    name: 'PlayForReal',
    component: App
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
