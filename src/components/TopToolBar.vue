<template>
    <v-app-bar
            app elevation="1" clipped-left elevate-on-scroll height="60">
        <a href="/" class="d-flex align-center" style="text-decoration:none">
            <v-img src="../assets/MainLogo.png"
                   alt="虚假信息云判官"
                   contain
                   width="50"
                   transition="scale-transition"
                   class="shrink mr-2"/>
            <span class="hidden-sm-and-down text-h5">虚假信息云判官</span>
        </a>
        <v-spacer/>
        <div>
            <v-tabs
                    optional
                    background-color="transparent">
                <v-tab to='/' class="font-weight-bold" exact :ripple="false" min-width="96" text>
                    首页
                </v-tab>
                <!--                <v-tab to='/applicationToken' :ripple="false" class="font-weight-bold"-->
                <!--                       min-width="96" text>接口使用申请-->
                <!--                </v-tab>-->
                <v-tab to='/test' class="font-weight-bold" :ripple="false"
                       min-width="96" text>效果体验
                </v-tab>
                <v-tab v-if="!isLogin" to='/login' class="font-weight-bold"
                       :ripple="false" min-width="96" text>登录/注册
                </v-tab>

                <v-menu v-else bottom
                        min-width="150"
                        offset-x
                        offset-y
                        origin="center center"
                        transition="scale-transition">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon large>
                            <v-avatar size="48px" item v-on="on" v-bind="attrs">
                                <v-img class="avatar" src="../assets/noface.jpg" style="" alt=""/>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item to="/ApplicationManager">
                            <v-list-item-title>控制台</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="Logout">
                            <v-list-item-title>退出登录</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>


            </v-tabs>

        </div>
    </v-app-bar>

</template>

<script>

    export default {
        name: "TopToolBar",
        data: () => ({
            isLogin: false,
            UserInformation: {
                "id": "",
                "name": "",
                "phoneNumber": "",
                "avatar": "",
                "email": "",
                "commitList": "",
                "keyList": ""
            },
            items: [
                {title: 'Click Me'},
                {title: 'Click Me'},
                {title: 'Click Me'},
                {title: 'Click Me 2'},
            ],
        }),
        methods: {
            LoginOrLogout: function () {
                this.axios.get('/getInfo/').then(
                    response => {
                        let data = response.data["data"]
                        if (localStorage.getItem("id") !== response.data.id) {
                            localStorage.setItem("name", data.name)
                            localStorage.setItem("avatar", data.avatar)
                            localStorage.setItem("id", data.id)
                            localStorage.setItem("email", data.email)
                            localStorage.setItem("keyList", data.keyList)
                            localStorage.setItem("commitList", data.commitList)
                            localStorage.setItem("phoneNumber", data.phoneNumber)
                            localStorage.setItem("hasApplication", data["personCertified"])
                            console.log(localStorage.getItem("hasApplication"))
                        }
                        this.$store.state.isLogin = true
                        let UserInformation = this.$store.state.UserInformation
                        UserInformation.id = localStorage.getItem("id")
                        UserInformation.email = localStorage.getItem("email")
                        UserInformation.avatar = localStorage.getItem("avatar")
                        UserInformation.name = localStorage.getItem("name")
                        UserInformation.phoneNumber = localStorage.getItem("phoneNumber")
                        UserInformation.keyList = localStorage.getItem("keyList")
                        UserInformation.commitList = localStorage.getItem("commitList")
                        if (localStorage.getItem("hasApplication") === null) {
                            console.log("cssfdsfsdcsdc")
                            UserInformation.hasApplication = false
                        } else {
                            console.log("jhgsfdhdfghdfg")
                            UserInformation.hasApplication = true
                        }
                    }
                ).catch(error => {
                    switch (error.response.data.statusCode) {
                        case 302:
                            this.isLogin = false
                            break
                    }
                })
            },
            Logout: function () {
                this.axios.get('/login/logout').then(
                    () => {
                        this.$store.state.isLogin = false
                    }
                )
            }
        },
        computed: {
            IsLoginMonitor() {

                return this.$store.state.isLogin
            },
        },
        watch: {
            IsLoginMonitor() {
                this.isLogin = this.$store.state.isLogin
                this.$forceUpdate()
            },
        },
        created() {
            this.LoginOrLogout()
        }
    }


</script>

<style scoped>
</style>