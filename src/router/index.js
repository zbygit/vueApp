import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import shopingcar from '@/components/shopingcar/shopingcar'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/shopingcar',
      name: 'shopingcar',
      component: shopingcar
    }, {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
