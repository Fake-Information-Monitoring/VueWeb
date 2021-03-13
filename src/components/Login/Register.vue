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
                                <input type="text" class="account" placeholder="请输入您的账号">
                            </label>
                        </div>
                        <div class="box">
                            <label>
                                <input type="text" class="password" placeholder="请输入您的密码">
                            </label>
                        </div>
                        <div class="box">
                            <label>
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
        name: "Register"
    }
</script>

<style scoped>

</style>