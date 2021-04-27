<template>
    <div class="login-page" :style="img">
        <div class="login-box">
            <div class="main-view">
                <div class="title">
                    <h1>注册</h1>
                </div>
                <div>
                    <div class="inner">
                        <div class="box">
                            <label>
                                <input v-model="userName" class="userName" placeholder="请输入您的昵称">
                            </label>
                        </div>
                        <div class="box">
                            <label>
                                <input v-model="email" class="email" placeholder="请输入您的邮箱" @blur="email_blur">
                            </label>
                            <div class="errorMassage" v-html="errorMessage"></div>
                        </div>
                        <div class="box">
                            <label>
                                <input v-model="phoneNum" class="phoneNum" placeholder="请输入您的手机号">
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
                            <button v-on:click="getVerificationCode" id="getVerificationCode">获取验证码</button>
                        </div>
                        <div class="box">
                            <button v-on:click="register" id="register">注册</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data: () => ({
            img: {
                backgroundImage: "url(" + require("../../assets/1.jpg") + ")"
            },
            userName: "",
            email: "",
            phoneNum: "",
            password: "",
            verificationCode: "",
            errorMessage: "",
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
                    response =>{
                        console.log("22222")
                        if(response.data.status === 200){
                            alert("注册成功准备跳转")
                        }
                    }
                )
            },
            getVerificationCode : function(){
                console.log("3333")
                if (this.email_blur){
                    console.log(this.email)
                    console.log(this.axios.post("/signUp/email",
                        {
                            'email' : this.email
                        }
                    ))

                }else {
                    alert(this.errorMessage);
                }


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