import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/layout/map.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Map
    },
    {
      path: '*',
      component: Map
    }
  ]
})

export default router
