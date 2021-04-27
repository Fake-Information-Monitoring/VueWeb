<template>
    <div class="login-page" >
        <img class="backgroundImage" src="../../assets/1.jpg" alt="">
        <div class="login-box">
            <div class="main-view">
                <div class="title">
                    <h1>登录</h1>
                </div>
                <div class="inner">
                    <div class="box">

                        <label>
                            <input v-model="email" class="account" placeholder="请输入您的邮箱">
                        </label>
                    </div>
                    <div class="box">
                        <label>
                            <input v-model="password" class="password" placeholder="请输入您的密码">
                        </label>
                    </div>
                    <div class="box">
                        <label>
                            <input v-model="verificationCode" id="innerVerificationCode" placeholder="请输入验证码">
                        </label>
                        <input v-on:click="GetVerificationCode" :disabled="isDisable" type="image" :src="url"
                               id="getVerificationCode" alt="">
                    </div>
                    <div class="box">
                        <button v-on:click="Login" id="login" value="登录">登录</button>
                        <router-link id="register" to='/register' value="注册">注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "Login",
        data: () => ({
            img: {
                backgroundImage: "url(" + require("../../assets/1.jpg") + ")"
            },
            url: "/api/login/verifyCode/1",
            email: "735647571@qq.com",
            password: "wstzj123",
            verificationCode: "",
            isDisable: false,
            isLogin: false
        }),
        methods: {

            Login: function () {
                this.axios.post("/login/loginWithEmail",
                    {
                        "account": this.email,
                        "password": this.password,
                        "verifyCode": this.verificationCode
                    }).then(response => {
                        let data = response.data["data"][0]
                        this.$store.state.isLogin = true
                        localStorage.setItem("isLogin", this.$store.state.isLogin === true ? 1 : "")
                        localStorage.setItem('session', data["value"])
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

                            localStorage.setItem("name",data.name)
                            localStorage.setItem("avatar",data.avatar)
                            localStorage.setItem("id",data.id)
                            localStorage.setItem("email",data.email)
                            localStorage.setItem("keyList",data.keyList)
                            localStorage.setItem("commitList",data.commitList)
                            localStorage.setItem("phoneNumber",data.phoneNumber)

                        })
                        this.$router.push("/")
                    },
                    error => {
                        console.log(error.response.data.msg)
                        console.log('接口报错');
                    })
                    .catch(error => {
                        error
                        console.log('处理逻辑出错');
                    })
            },
            GetVerificationCode: function () {
                this.url = "/api/login/verifyCode/" + Math.random();
                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 500)
            },
        },
        created() {
            this.GetVerificationCode();

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