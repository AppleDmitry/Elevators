import { createWebHashHistory, createRouter } from "vue-router";

import Main from '../components/Main.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        meta: {
            title: 'Главная',
        }
    },
]

const router = createRouter({
    history: createWebHashHistory("/"),
    routes,
})

export default router;