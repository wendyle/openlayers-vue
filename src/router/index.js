import Vue from 'vue'
import Router from 'vue-router'
import FaceMap from '@/layout/faceMap.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: FaceMap
    },
    {
      path: '*',
      component: FaceMap
    }
  ]
})

export default router
