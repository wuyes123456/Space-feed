import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import tabBar from "../layout/tabBar"
// 公共路由
export const constantRoutes = [
    {
        path: '/',
        redirect: '/index',
        component: tabBar,
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/views/home/index'),
            },{
                path: 'order',
                name: 'order',
                component: () => import('@/views/Order/index'),
            },{
                path: 'studio',
                name: 'studio',
                component: () => import('@/views/Studio/index'),
            },{
                path: 'my',
                name: 'my',
                component: () => import('@/views/My/index'),
            },{
                path: 'team',
                name: 'team',
                component: () => import('@/views/My/pages/Team'),
            }
        ]
    },
]

// 防止连续点击多次路由报错
let routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(err => err)
}

export default new Router({
    mode: 'hash', // hash 去掉url中的#  history
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})