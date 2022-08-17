import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公共路由
export const constantRoutes = [
    {
        path: '/',
        redirect: '/index',
        component: () => import('@/layout/tabBar'),
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/views/home/index'),
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
