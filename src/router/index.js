import 'vue-router';
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import {
    ROUTER_404,
    ROUTER_500,
    ROUTER_ABOUT_ME,
    ROUTER_BLOG,
    ROUTER_HOME,
    ROUTER_BLOG_PANEL,
    ROUTER_CATEGORY, ROUTER_DEMO_PAGE, ROUTER_POSTS_PAGE
} from './router_names'

/**
 * 如果path带参数：
 *  path: `/:lang/${ROUTER_CREATE_EMPLOYEE}/:id`,
 *  path: `/:lang/${ROUTER_RANK_AND_SALARY_REVIEW_HISTORY}/:type/:userId/`,
 */
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
        path: `/${ROUTER_BLOG}/:articleCode`,
        name: ROUTER_BLOG,
        component: () => import(/* webpackChunkName: "about" */ '../views/ArticleDetail.vue')
    },
    {
        path: `/${ROUTER_BLOG_PANEL}/:categoryCode`,
        name: ROUTER_BLOG_PANEL,
        component: () => import(/* webpackChunkName: "about" */ '../views/ArticleList.vue')
    },{
        path: `/${ROUTER_CATEGORY}/:code`,
        name: ROUTER_CATEGORY,
        component: () => import(/* webpackChunkName: "about" */ '../views/CategoryList.vue')
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
    {
        path: `/${ROUTER_DEMO_PAGE}`,
        name: ROUTER_DEMO_PAGE,
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue')
    },
    {
        path: `/${ROUTER_POSTS_PAGE}`,
        name: ROUTER_DEMO_PAGE,
        component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue')
    },
]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
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
