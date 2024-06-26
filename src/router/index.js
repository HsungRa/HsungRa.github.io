import 'vue-router';
import {createRouter, createWebHistory} from 'vue-router'
import {ROUTER_404, ROUTER_500, ROUTER_ABOUT_ME, ROUTER_BLOG, ROUTER_HOME, ROUTER_BLOG_PANEL} from './router_names'

/**
 * 如果path带参数：
 *  path: `/:lang/${ROUTER_CREATE_EMPLOYEE}/:id`,
 *  path: `/:lang/${ROUTER_RANK_AND_SALARY_REVIEW_HISTORY}/:type/:userId/`,
 */
const getUrl =(name)=> {
    return new URL(`../views/${name}.vue`, import.meta.url).href
}
// ''
const routes = [
    {
        path: '/',
        name: ROUTER_HOME,
        component: () => import(/* webpackChunkName: "about" */ '../views/HomePage.vue')
    },
    {
        path: `/${ROUTER_ABOUT_ME}`,
        name: ROUTER_ABOUT_ME,
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue')
    },
    {
        path: `/${ROUTER_BLOG}/:category/:name`,
        name: ROUTER_BLOG,
        component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
    },
    {
        path: `/${ROUTER_BLOG_PANEL}/:category`,
        name: ROUTER_BLOG_PANEL,
        component: () => import(/* webpackChunkName: "about" */ '../views/BlogPanel.vue')
    },
    {
        path: `/${ROUTER_404}`,
        name: ROUTER_404,
        component: () => import(/* webpackChunkName: "about" */ '../views/error/404.vue')
    },
    {
        path: `/${ROUTER_500}`,
        name: ROUTER_500,
        component: () => import(/* webpackChunkName: "about" */ '../views/error/500.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const handleRouter = (routerNames = []) => {
    routes.forEach((item) => {
        item.name && routerNames.push(item.name)
    })
    return routerNames
}

router.beforeEach((to, from, next) => {
    // const globalStore = GlobalStore()
    // const origin = window.location.origin
    const routerNames = handleRouter()
    if (routerNames.includes(to.name)) {
        return next()
    }
    next({
        name: ROUTER_404,
    })
})

router.afterEach(() => {
    // TODO
})

export default router
