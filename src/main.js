import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueCookie from  'vue-cookie'
import vuetify from './plugins/vuetify'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueCookie);

Vue.config.debug = true;
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        isLogin : false,
        isSkip : false,
        isApplication : {
            Sensitive : false,
            Rumor: false
        },
        UserInformation : {
            "id" : "",
            "name" : "",
            "phoneNumber" : "",
            "avatar" : "",
            "email" : "",
            "commitList" :"",
            "keyList" : "",
            "hasApplication": null,
        },
        Acc :{
            advertising : 0,
            fear : 0,
            gun_fear: 0,
            human : 0,
            normal : 0,
            political : 0,
            rumor : 0,
            sex : 0,
            reactionary : ""
        }
    },
    mutations: {
        Login (state) {
            state.isLogin = true
        },
        Logout (state) {
            state.isLogin = false
        }


    }
})

axios.defaults.baseURL = '/api'
axios.defaults.headers = {
    "Content-Type":"application/json;charset=utf-8",
}
axios.defaults.withCredentials = true;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
