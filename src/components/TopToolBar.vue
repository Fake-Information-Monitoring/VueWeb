<template>
    <div class="header">
        <div class="left">
            <div class="logo">
                <a href="/" class="web-title">
                    <img src="../assets/MainLogo.png">
                    <span>虚假信息云判官</span>
                </a>
            </div>
        </div>

        <div class="right">
            <div class="toolList">
                <div class="layout">
                    <div class="navigation">
                        <ul id="nav">
                            <li class="router-link-active">
                                <router-link to='/' class="route">首页</router-link>
                            </li>
                            <li class="router-link-active">
                                <router-link to='/applicationToken' class="route">接口使用申请</router-link>
                            </li>
                            <li class="router-link-active">
                                <router-link to='/test' class="route">效果体验</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="log">
                        <div v-if="!isLogin" class="login">
                            <router-link to='/login' class="route router-link-active">登录/注册</router-link>
                        </div>
                        <div v-else class="avatarLi tooltip">
                            <img class="avatar" src="../assets/noface.jpg" style="" alt=""/>
                            <div class="tooltipText">
                                <div>
                                    <router-link to="/ApplicationManager" style="color: black">应用管理</router-link>
                                </div>
                                <div style=" padding: 0 20px 0;margin: 20px 0;line-height: 1px;border-left: 190px solid #ddd;border-right: 190px solid #ddd;text-align: center;  "></div>
                                <div>
                                    <div v-on:click="">退出登录</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            }
        }),
        methods: {
            LoginOrLogout: function () {
                this.axios.get('getInfo/').then(
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
                        }
                        console.log(this.$store.state.isLogin)
                        console.log(this.isLogin)
                        this.$store.state.isLogin = true
                        let UserInformation = this.$store.state.UserInformation
                        UserInformation.id = localStorage.getItem("id")
                        UserInformation.email = localStorage.getItem("email")
                        UserInformation.avatar = localStorage.getItem("avatar")
                        UserInformation.name = localStorage.getItem("name")
                        UserInformation.phoneNumber = localStorage.getItem("phoneNumber")
                        UserInformation.keyList = localStorage.getItem("keyList")
                        UserInformation.commitList = localStorage.getItem("commitList")
                    }
                ).catch(error => {
                    switch (error.response.data.statusCode) {
                        case 302:
                            this.isLogin = false
                            break
                    }
                })
            },

        },
        computed: {
            IsLoginMonitor() {

                return this.$store.state.isLogin
            },
            getUserInformation() {
                return this.$store.state.UserInformation.name
                    || this.$store.state.UserInformation.id
                    || this.$store.state.UserInformation.phoneNumber
                    || this.$store.state.UserInformation.avatar
                    || this.$store.state.UserInformation.email
                    || this.$store.state.UserInformation.commitList
                    || this.$store.state.UserInformation.keyList
            }
        },
        watch: {
            IsLoginMonitor() {
                this.isLogin = this.$store.state.isLogin
                this.$forceUpdate()
            },
            getUserInformation() {
                let __this = this.UserInformation

                __this.avatar = this.$store.state.UserInformation.avatar
                __this.commitList = this.$store.state.UserInformation.commitList
                __this.email = this.$store.state.UserInformation.email
                __this.id = this.$store.state.UserInformation.id
                __this.keyList = this.$store.state.UserInformation.keyList
                __this.name = this.$store.state.UserInformation.name
                __this.phoneNumber = this.$store.state.UserInformation.phoneNumber
                this.$forceUpdate()
            }
        },
        created() {
            this.LoginOrLogout()
        }
    }


</script>

<style scoped>
    .header {
        min-width: 1440px;
        height: 40px;
        padding: 10px 60px;
        background-color: rgba(255, 255, 255, 95);
        border-bottom: 1px solid rgb(165, 88, 88);
        top: 0;
        width: 100%;
        position: fixed;
        z-index: 1;
    }

    #nav li {
        margin: 0 0.6em;
        display: inline;
        font-size: 20px;
    }

    #nav {
        display: block;
        list-style-type: disc;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: none;
        color: #0092ee;
    }

    .router-link-active {
        text-decoration: none;
        color: yellow;
    }

    li {
        text-align: -webkit-match-parent;
    }

    .left {
        width: 20%;
        display: inline-block;
    }

    .logo {
        font-size: 1.5em;
        line-height: 40px;
        color: #273849;
        font-weight: 500;
    }

    .logo img {
        vertical-align: middle;
        margin-right: 6px;
        width: 40px;
        height: 40px;
    }

    .right {
        display: inline-block;
        width: 75%;
        height: 40px;
    }

    .toolList {
        display: flex;
        height: 100%;
    }

    .layout {
        justify-content: flex-end;
        margin-left: auto;
        position: relative;

    }

    .navigation {
        display: inline-block;
        margin-right: 100px;
    }

    .log {
        right: 20px;
        position: absolute;
        display: inline-block;
    }

    .login {
        font-size: 20px;
        position: relative;
        left: 20px;
    }

    .avatarLi {
        /*right: 20px;*/
        top: -7.5px;
        right: 10px;
        position: relative;
    }

    .avatar {
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltipText {
        visibility: hidden;
        width: 120px;
        background-color: #ffffff;

        text-align: center;
        border: 1px solid #0381aa;;
        border-radius: 6px;
        padding: 5px 0;

        /* 定位 */
        position: absolute;
        z-index: 1;
        top: 100%;
        left: 50%;
        margin-left: -60px;
    }

    .tooltip:hover .tooltipText {
        visibility: visible;
    }

</style>