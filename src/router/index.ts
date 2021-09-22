import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Longin',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "login" */ '../views/HomePage.vue'),
    },
    {
        path: '/Test',
        name: 'Tets',
        component: () => import(/* webpackChunkName: "login" */ '../views/TestPage.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
