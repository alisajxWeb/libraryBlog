import Vue from 'vue'
import Router from 'vue-router'
import Lib from '@/components/page/Lib'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lib',
      component: Lib
    }
  ]
})
