import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from "@/components/Test/Test";
import Login from "@/components/Login/Login";
import BuyToken from "@/components/BuyToken/ApplicationToken";
import HomeView from "@/components/HomeView/HomeView";
import Indecency from "@/components/Test/Indecency";
import Register from "@/components/Login/Register";
import IndividualApplication from "@/components/Application/ View/IndividualApplication";
import Rumor from "@/components/Test/Rumor";
import Application from "@/components/Application/index"
import ApplicationManager from "@/components/Application/ View/ApplicationManager";
import FileUpload from "@/components/Application/ View/FileUpload";
import Map from "@/components/Application/ View/Map";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomeView,
        meta: {
            title:'首页'
        }
    },
    {
        path: '/test',
        component: Test,
        children: [
            {
                path: '',
                component: Indecency,
                meta: {
                    title:'关键词检测'
                }

            },
            {
                path: 'rumor',
                component: Rumor,
                meta: {
                    title:'谣言分析'
                }
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title:'登录'
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            title:'注册'
        }
    },
    {
        path: '/applicationToken',
        component: BuyToken,
        meta: {
            title:'首页'
        }
    },
    {
        path: "/ApplicationManager",
        component: Application,
        children: [
            {
                path: 'IndividualApplication',
                component: IndividualApplication,
                meta: {
                    title:'身份认证'
                }
            },
            {
                path: 'ApplicationManager',
                component: ApplicationManager,
                meta: {
                    title:'应用管理'
                }
            },
            {
                path: 'FileUploader',
                component: FileUpload,
                meta: {
                    title:'文件上传'
                }
            },
            // {
            //     path: 'Map',
            //     component: Map,
            //     meta:{
            //         title: '言论监测'
            //     }
            // }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

export default router

