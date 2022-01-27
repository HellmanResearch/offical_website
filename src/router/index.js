import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  //   {
  //   path: '/',
  //   redirect: "/"
  // },
  {
    path: '/',
    name: 'home',
    component: home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router