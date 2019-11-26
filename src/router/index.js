import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import shopingcar from '@/components/shopingcar/shopingcar'
import mine from '@/components/mine/mine'
import detail from '@/components/home/detail'
import order from '@/components/mine/order'
import orderInfo from '@/components/mine/orderInfo'

Vue.use(Router)

export default new Router({
    routes: [{
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
        component: mine,

    }
    , {
        path: '/detail',
        name: 'detail',
        component: detail,

    }, {
        path: '/order',
        name: 'order',
        component: order
    },{
        path:"/orderInfo",
        name:"orderInfo",
        component:orderInfo
    }]

})
