<template>
    <v-container>
        <v-alert :value="alert" outlined type="error" prominent border="left" dismissible
                 transition="scroll-y-transition" style="position: absolute; top: 0; right:0; left: 0; z-index: 1">
            {{errorMsg}}
        </v-alert>
        <v-row class="mt-16">
            <v-col>
                <v-row justify="center">
                    <v-card class="pa-12" elevation="0" min-width="600">

                        <v-card-title class="justify-center text-h2">登录</v-card-title>
                        <v-text-field v-model="email" clearable outlined placeholder="请输入您的邮箱" class="mt-12"/>
                        <v-text-field v-model="password"
                                      name="password"
                                      clearable
                                      outlined
                                      placeholder="请输入您的密码"
                                      :type="show ?'text': 'password'"
                                      :append-icon="show ?'mdi-eye-off':'mdi-eye'"
                                      @click:append="show=!show"
                                      class="mt-12"/>
                        <v-row class="mt-8">
                            <v-col>
                                <v-text-field v-model="verificationCode" clearable outlined placeholder="请输入验证码"/>
                            </v-col>
                            <v-col>
                                <v-row justify="center">
                                    <v-img v-on:click="getVerificationCode" :disabled="isDisable" max-width="150"
                                           max-height="60" aspect-ratio="2.5" :src="url" alt=""/>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-container class="mt-8">
                            <v-row>
                                <v-col>
                                    <v-row justify="start">
                                        <v-btn v-on:click="Login" color="primary" min-width="200" value="登录">登录</v-btn>
                                    </v-row>
                                </v-col>
                                <v-col>
                                    <v-row justify="end">
                                        <v-btn to='/register' color="primary" min-width="200" value="注册">注册</v-btn>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-row>

            </v-col>
        </v-row>

    </v-container>
</template>

<script>


    export default {
        name: "Login",
        data: () => ({
            alert: false,
            errorMsg: '',
            show: false,
            img: {
                backgroundImage: "url(" + require("../../assets/1.jpg") + ")"
            },
            url: "/api/login/verifyCode/1",
            email: "735647571@qq.com",
            password: "wstzj123",
            verificationCode: "",
            isDisable: false,
            isLogin: false,
            isErrorRequest: false
        }),
        methods: {

            Login: function () {
                this.alert = false
                this.axios.post("/login/loginWithEmail",
                    {
                        "account": this.email,
                        "password": this.password,
                        "verifyCode": this.verificationCode
                    }).then(() => {

                        this.axios.get("/getInfo/").then(response => { //获取用户信息

                            let UserInformation = this.$store.state.UserInformation
                            let data = response.data["data"]

                            UserInformation.id = data.id
                            UserInformation.phoneNumber = data.phoneNumber
                            UserInformation.email = data.email
                            UserInformation.avatar = data.avatar
                            UserInformation.name = data.name
                            UserInformation.keyList = data.keyList
                            UserInformation.commitList = data.commitList

                            localStorage.setItem("name", data.name)
                            localStorage.setItem("avatar", data.avatar)
                            localStorage.setItem("id", data.id)
                            localStorage.setItem("email", data.email)
                            localStorage.setItem("keyList", data.keyList)
                            localStorage.setItem("commitList", data.commitList)
                            localStorage.setItem("phoneNumber", data.phoneNumber)

                            this.$store.state.isLogin = true
                        })
                        this.$router.push("/")
                    },
                    error => {
                        console.log(error.response.data.msg)
                        let errorMsg = error.response.data.msg
                        this.errorMsg = errorMsg
                        this.alert = true
                        this.verificationCode = ""
                        this.getVerificationCode()
                        setTimeout(() => {
                            this.alert = false
                        }, 3000)
                    })
            },
            getVerificationCode: function () {
                this.url = "/api/login/verifyCode/" + Math.random();
                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 500)
            },
        },
        created() {
            this.getVerificationCode();

        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (vm.$store.state.isLogin === true) {
                    vm.$router.replace('/Application')
                }
            })
        }
    }
</script>

<style scoped>

    .login-page {
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .backgroundImage {
        z-index: 0;
        display: flex;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        min-width: 1190px;
    }

    .login-box {
        height: 80%;
        margin: 0 35%;
        background-color: rgba(255, 255, 255, 100);
        border: 1px solid rgba(50, 189, 254, 18);
        opacity: 0.95;
        box-shadow: 0 8px 22px 6px rgba(34, 34, 34, 10);
        border-radius: 10px;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    h1 {
        margin: 0;
        height: 100%;
        text-align: center;
    }

    .main-view {
        height: 100%;
        padding: 10%;
        box-sizing: border-box;

    }

    .box {
        width: 100%;
        margin-bottom: 10%;
        height: 5%;
    }

    .title {
        height: 10%;
    }

    .inner {
        margin-top: 5%;

    }

    label {
        height: 100%;
        font-size: 30px;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid #ddd;
        color: #aaa;
        font-size: 20px;
        padding-left: 5%;
        height: 65px;
        vertical-align: middle;
        border-radius: 4px;
    }

    #innerVerificationCode {
        width: 60%;

    }

    #getVerificationCode {
        width: 20%;
        height: 65px;
        margin-left: 15%;
    }

    #login {
        border: 1px solid #0381aa;
        color: #fff;
        background-color: #00a7de;
        display: inline-block;
        height: 36px;
        border-radius: 2px;
        width: 40%;
        line-height: 38px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        padding: 0;
    }

    #getVerificationCode {
        padding: 0;
    }

    #register {
        box-sizing: border-box;
        vertical-align: middle;
        background: #f7f7f7;

        color: #555;
        display: inline-block;
        height: 36px;
        border: 1px solid #ccc;
        border-radius: 2px;
        width: 40%;
        line-height: 38px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        margin-left: 20%;
        padding: 0;
    }
</style>