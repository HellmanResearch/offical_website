import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/Home2.vue'
import home2 from '../views/home/Home.vue'

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
  },
  {
    path: '/home',
    name: 'home2',
    component: home2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
