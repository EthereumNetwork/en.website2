import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import TestRoute from '../components/TestRoute.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: TestRoute }
]

Vue.use(VueRouter)

export default new VueRouter({
  routes: routes,
  mode: 'history'
})
