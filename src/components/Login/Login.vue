<template>
    <div class="login-page" :style="img">
        <div class="login-box">
            <div class="main-view">
                <div class="title">
                    <h1>登录</h1>
                </div>
                <div>
                    <div class="inner">
                        <div class="box">
                            <label>
                                <input type="text" class="account" placeholder="请输入您的账号">
                            </label>
                        </div>
                        <div class="box">
                            <label>
                                <input type="text" class="password" placeholder="请输入您的密码">
                            </label>
                        </div>
                        <div class="box">
                            <label >
                                <input type="text" id="innerVerificationCode" placeholder="请输入验证码">
                            </label>
                            <input type="submit" id="getVerificationCode" value="获取验证码">
                        </div>
                        <div class="box">
                            <input type="submit" id="login" value="登录">
                            <input type="submit" id="register" value="注册">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                img: {
                    backgroundImage: "url(" + require("../../assets/1.jpg") + ")"
                }
            }
        }
    }
</script>

<style scoped>
    .login-page{
        padding-top: 10%;
        height: 720px;
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

    h1{
        margin: 0;
        font-size: 36px;
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

    #register {
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