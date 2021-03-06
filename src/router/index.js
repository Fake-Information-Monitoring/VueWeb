import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from "@/components/Uploader/Test";
import Login from "@/components/Login/Login";
import BuyToken from "@/components/BuyToken/BuyToken";
import HomeView from "@/components/HomeView/HomeView";
import Indecency from "@/components/Uploader/Indecency";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/test',
        component: Test,
        children: [
            {
                path: 'indecency',
                component: Indecency
            },
            {
                path: 'recognition',
                component: Indecency
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/buytoken',
        component: BuyToken
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})


export default router
