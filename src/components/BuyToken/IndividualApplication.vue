<template>
    <div class="login-page">
<!--        <img class="backgroundImage" src="../../assets/1.jpg" alt="">-->
        <div style="padding-top: 5%">
            <div class=" login-box">
                <div class="main-view">
                    <div class="title">
                        <h1>个人申请</h1>
                    </div>
                    <div>
                        <div class="inner">
                            <div class="box">
                                <label>
                                    <input v-model="Name" class="Name" placeholder="请输入您的姓名">
                                </label>
                            </div>
                            <div class="box">
                                <label>
                                    <input v-model="IDCard" class="IdentityCard" placeholder="请输入您的身份证">
                                </label>

                            </div>
                            <div class="box">
                                <label>
                                    <input v-model="occupation" class="occupation" placeholder="请输入您的从事职业">
                                </label>
                            </div>
                            <div class="box">
                                <label>
                                    <input v-model="placeOfWork" class="placeOfWork" placeholder="请输入您的所属单位/学校">
                                </label>
                            </div>
                            <!--                        <div class="box">-->
                            <!--                            <label>-->
                            <!--                                <input v-model="verificationCode" id="innerVerificationCode" placeholder="请输入验证码">-->
                            <!--                            </label>-->
                            <!--                            <button v-on:click="getVerificationCode" id="getVerificationCode">获取验证码</button>-->
                            <!--                        </div>-->
                            <div class="box">
                                <button v-on:click="Application" id="register">申请</button>
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
        name: "IndividualApplication",
        data: () => ({
            occupation: "",
            placeOfWork: "",
            IDCard: "",
            Name: ""
        }),
        methods: {
            Application: function () {
                this.axios.post('/cdKey/createToken',
                ).then(
                    response => {
                        let data = response.data["data"]
                        localStorage.setItem("token", data)
                        console.log(data)
                    }
                )
            }
        }
    }
</script>

<style scoped>

    .backgroundImage {
        z-index: 0;
        display: flex;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        min-width: 1190px;
    }

    .login-page {

        height: 100%;
    }

    .login-box {

        margin-left: 40%;
        margin-right: 40%;
        background-color: rgba(255, 255, 255, 100);
        border: 1px solid rgba(50, 189, 254, 18);
        opacity: 0.99;
        box-shadow: 0 8px 22px 6px rgba(34, 34, 34, 10);
        border-radius: 10px;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    h1 {
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