<template>
    <v-container>
        <v-alert :value="alert" outlined type="error" prominent border="left" dismissible
                 transition="scroll-y-transition" style="position: absolute; top: 0; right:0; left: 0; z-index: 1">
            {{errorMsg}}
        </v-alert>
        <v-row class="mt-16">
            <v-col>
                <v-row justify="center">
                    <v-card elevation="0" min-width="600" class="overflow-hidden">
                        <v-card-title class="justify-center text-h2">注册</v-card-title>
                        <v-text-field class="mt-4" outlined v-model="userName" placeholder="请输入您的昵称"></v-text-field>
                        <v-text-field class="mt-4" outlined v-model="email" placeholder="请输入您的邮箱"
                                      @blur="email_blur"></v-text-field>
                        <v-text-field class="mt-4" outlined v-model="phoneNum" placeholder="请输入您的手机号"></v-text-field>
                        <v-text-field v-model="password"
                                      name="password"
                                      clearable
                                      outlined
                                      placeholder="请输入您的密码"
                                      :type="show ?'text': 'password'"
                                      :append-icon="show ?'mdi-eye-off':'mdi-eye'"
                                      @click:append="show=!show"
                                      class="mt-12"/>
                        <v-row class="mt-4">
                            <v-col>
                                <v-text-field outlined v-model="verificationCode" placeholder="请输入验证码"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-row justify="center">
                                    <v-img v-on:click="getVerificationCode" :disabled="isDisable" max-width="150"
                                           max-height="60" aspect-ratio="2.5" :src="url" alt=""/>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-container class="mt-4">
                            <v-row>
                                <v-col>
                                    <v-row justify="center">
                                        <v-btn min-width="600" color="primary" v-on:click="register">注册</v-btn>
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
        name: "Register",
        data: () => ({
            alert: false,
            url: "/api/login/verifyCode/1",
            isDisable: false,
            userName: "",
            email: "",
            phoneNum: "",
            password: "",
            verificationCode: "",
            errorMessage: "",
            show : false
        }),

        methods: {
            register: function () {
                console.log("1111")
                this.axios.post("/signUp/create",
                    {
                        "name": this.userName,
                        "email": this.email,
                        "password": this.password,
                        "phoneNumber": this.phoneNum,
                        "emailCode": this.verificationCode
                    }
                ).then(
                    response => {
                        if (response.data.status === 200) {
                            alert("注册成功准备跳转")
                        }
                    }, error => {
                        let msg = error.response.data.msg
                        this.errorMsg = msg
                        this.alert = true
                        this.verificationCode = ""
                        this.getVerificationCode()

                        setTimeout(() => {
                            this.alert = false
                        }, 3000)
                    }
                )
            },
            getVerificationCode: function () {
                this.url = "/api/login/verifyCode/" + Math.random();
                this.isDisable = true

                setTimeout(() => {
                    this.isDisable = false
                }, 1000)
            },
            email_blur: function () {
                let that = this;
                const verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
                if (that.email !== "" && !verify.test(that.email)) {
                    that.errorMessage = "邮箱格式错误, 请重新输入";
                    return false;
                } else {
                    this.errorMessage = "";
                    return true;
                }
            }
        },
        beforeRouteEnter(to,from,next){
            next( vm=>{
                if(vm.$store.state.isLogin === true){
                    vm.$router.replace('/Application')
                }
            })
        }
    }
</script>

<style scoped>
    .login-page {
        padding-top: 5%;
        height: 720px;
        padding-bottom: 5%;
    }

    .login-box {
        margin: 0 40%;
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
        font-size: 36px;
    }

    .errorMassage {
        color: #f45d90;
        top: 12px;
        font-size: 10px;
        margin: 0;

    }

    .main-view {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10%;
        position: relative;
        box-sizing: border-box;
        text-align: center;
    }

    .box {
        width: 100%;
        margin-top: 15%;
    }

    .box input {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid #ddd;
        color: #aaa;

        font-size: 14px;
        padding: 10px;
        height: 40px;
        vertical-align: middle;
        border-radius: 4px;
    }

    #innerVerificationCode {
        width: 60%;
        height: 36px;
    }

    #getVerificationCode {
        width: 35%;
        height: 36px;
        margin-left: 5%;
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
        width: 100%;
        line-height: 38px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        padding: 0;
    }
</style>