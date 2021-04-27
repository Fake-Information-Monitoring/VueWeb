import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from "@/components/Uploader/Test";
import Login from "@/components/Login/Login";
import BuyToken from "@/components/BuyToken/ApplicationToken";
import HomeView from "@/components/HomeView/HomeView";
import Indecency from "@/components/Uploader/Indecency";
import Register from "@/components/Login/Register";
import IndividualApplication from "@/components/BuyToken/IndividualApplication";
import Rumor from "@/components/Uploader/Rumor";
import ApplicationManager from "@/components/Application/index"

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
                path: '',
                component: Indecency,

            },
            {
                path: 'rumor',
                component: Rumor,

            }
        ]
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/applicationToken',
        component: BuyToken
    },
    {
        path: '/IndividualApplication',
        component: IndividualApplication
    },
    {
        path: "/ApplicationManager",
        component: ApplicationManager
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})


export default router

