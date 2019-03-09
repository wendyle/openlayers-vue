import Vue from 'vue'
import Router from 'vue-router'
import FaceMap from '@/layout/faceMap.vue'
import BigPic from '@/layout/bigPic'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: FaceMap
    },
    {
      path: '*',
      component: FaceMap
    },
    {
      path: '/bigPic',
      component: BigPic
    }
  ]
})

export default router
