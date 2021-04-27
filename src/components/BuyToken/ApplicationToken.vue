<template>
    <div style="overflow: hidden;">
<!--        <img class="backgroundImage" src="../../assets/1.jpg">-->
        <div class="application">
            <div class="application-box">
                <div class="main-view">
                    <div class="title">
                        <h1>身份认证</h1>
                    </div>
                    <div class="route">
                        <router-link to="/IndividualApplication" class="left block">

                            <div class="panel">
                                <div class="img">
                                    <img src="../../assets/Individual.png" class="logo">
                                </div>
                                <div class="name">
                                    个人认证入口
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/" class="right block">
                            <div class="panel">
                                <div class="img">
                                    <img src="../../assets/Enterprise.png" class="logo" alt="">
                                </div>
                                <div class="name">
                                    企业认证入口
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="description tooltip">
                        <div class="descriptionText">
                            申请说明
                        </div>

                        <span class="tooltipText">
                        <div>aaaaaaaaaaaaaaaaaa</div>
                        <div>bbb</div>
                        <div>ccc</div>
                        <div>aaaaaaaaaaaaaaaaaa</div>
                        <div>bbb</div>
                        <div>ccc</div>
                        <div>aaaaaaaaaaaaaaaaaa</div>
                        <div>bbb</div>
                        <div>ccc</div>
                        <div>aaaaaaaaaaaaaaaaaa</div>
                        <div>bbb</div>
                        <div>ccc</div>
                        <div>aaaaaaaaaaaaaaaaaa</div>
                        <div>bbb</div>
                        <div>ccc</div>
                    </span>
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
                        content: '审核结果会于一个工作日内以邮件的形式发回'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    .application {
        padding-top: 2.5%;
        height: 720px;
        min-height: 720px;
        z-index: 3;
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

    .application-box {
        height: 65%;
        margin-left: 30%;
        margin-right: 30%;
        margin-top: 5%;
        background-color: rgba(255, 255, 255, 100);
        opacity: 0.99;
        /*box-shadow: 0 8px 22px 6px rgba(34, 34, 34, 10);*/
        border-radius: 10px;
        z-index: 2;
    }

    .main-view {
        height: 100%;
    }


    .title {
        height: 15%;
        padding-top: 2%;
        text-align: center;

    }

    h1 {
        color: rgba(34, 34, 34, 100);
        font-size: 36px
    }


    .route {
        padding-top: 5%;
        margin-top: 5%;
        height: 55%;

    }

    .block {
        display: inline-block;
        width: 30%;
        height: 90%;
    }

    .left {

        margin-left: 10%;

    }

    .panel {

        padding-top: 5%;
        background-color: #cccccc;
        border-radius: 10px;
        height: 80%;
        background-color: rgba(255, 255, 255, 100);
        text-align: center;
        /*box-shadow: 0 2px 14px 1px rgba(34, 34, 34, 19);*/
        /*border: 1px solid rgba(255, 255, 255, 100);*/
    }

    .panel:hover {
        box-shadow: #0092ee 0 2px 14px 1px;
    }

    .right {
        margin-left: 20%;
    }


    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: none;
        color: white;
    }

    .img {
        text-align: center;
        height: 70%;
    }

    .logo {
        width: 120px;
        height: 120px;
    }

    .name {
        margin-top: 10%;
        height: 10%;
        text-align: center;
        color: rgba(98, 133, 174, 100);
        font-size: 20px;
    }

    .description {
        text-align: center;
    }

    .descriptionText {
        color: #0092ee;
        text-decoration: underline;
    }

    .tooltip {
        position: relative;

    }

    .tooltip .tooltipText {
        visibility: hidden;
        width: 452px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;

        /* 定位 */
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -226px;
    }

    .tooltip:hover .tooltipText {
        visibility: visible;
    }

</style>