<template>
    <div class="application" :style="img">
        <div class="application-box">
            <div class="main-view">
                <div class="title">
                    <h1>身份认证</h1>
                </div>
                <div class="description">
                    <ul>
                        <li v-for="list in lists" :key="list.id">{{list.content}}</li>
                    </ul>
                </div>
                <div class="route">
                    <div class="left">
                        <div class="left-panel">
                            <div class="img">
                                <img src="../../assets/2.png" class="logo">
                            </div>
                            <div class="name">
                                个人认证
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right-panel">
                            <div class="img">
                                <img src="../../assets/2.png" class="logo">
                            </div>
                            <div class="name">
                                企业认证
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
        name: "BuyToken",
        data() {
            return {
                img: {
                    backgroundImage: "url(" + require("../../assets/1.jpg") + ")"
                },
                lists: [
                    {
                        id: 0,
                        content: '个人用户无需认证'

                    },
                    {
                        id: 1,
                        content: '个人用户无团测权限'
                    },
                    {
                        id: 2,
                        content: '认证身份后将获取团测专业功能权限'
                    },
                    {
                        id: 3,
                        content: '认证需审核，审核时间为一个工作日内'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    .application {
        padding-top: 10%;
        height: 720px;
        display: block;
    }

    .application-box {
        padding: 2.5% 0.5%;
        box-shadow: 0 8px 22px 6px rgba(34, 34, 34, 10);
        border: 1px solid rgba(50, 189, 254, 18);
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 100);
        opacity: 0.95;
        margin: 0 40%;
    }

    .main-view {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-sizing: border-box;
    }

    .title {
        text-align: center;
    }

    .description {

    }

    .route {
        margin-top: 5%;
        box-sizing: border-box;
        vertical-align: middle;
        margin-bottom: 5%;
    }

    .left {
        margin-left: 10%;
        padding-top: 1px;
        width: 30%;
        display: inline-block;
    }

    .left-panel {
        flex-direction: column;

        padding: 13px;
        box-sizing: border-box;
        border: 1px solid #DCE3EB;
        background-color: #cccccc;
        border-radius: 10px;
    }

    .right {
        margin-left: 20%;
        width: 30%;
        display: inline-block;
    }

    .right-panel {

        flex-direction: column;
        padding: 13px;
        box-sizing: border-box;
        border: 1px solid #DCE3EB;
        background-color: #cccccc;
        border-radius: 10px;
    }

    .img {
        width: 20%;
    }

    .logo {
        vertical-align: middle;
        width: 75px;
        height: 75px;
    }

    .name {
        text-align: center;
    }

</style>