import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import shopingcar from '@/components/shopingcar/shopingcar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },  {
      path: '/home',
      name: 'home',
      component: home
    },  {
      path: '/shopingcar',
      name: 'shopingcar',
      component: shopingcar
    }
  ]
})
