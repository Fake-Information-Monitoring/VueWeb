<template>
    <div class="introduction">
        <h1>
            <br/>
            虚假信息云判官
        </h1>
        <div class="text">
            <div class="left">
                <p class="content">这一个社交信息反垃圾及僵尸用户检测开放平台，该平台具有诈骗信息、垃圾信息检测以及僵尸用户的检测。
                    具体功能如下：<br/>
                    第一，智能识别信息及分类功能。【虚假信息云判官】可以输入文字、网址或拖入文档，识别网站、短信、邮件
                    的诈骗类型从而进行精细化分类分类。例如，可以将文本内容先大略区分为涉黄、赌博及钓鱼网站之后，再继续
                    往下分类。之后根据信息所处的类型而对其是诈骗信息的概率风险进行评估。<br/>
                    第二，僵尸用户检测功能。目前我们只对微博用户进行检测，微博是国内最大的舆论聚集地，拥有相当一部分虚
                    假账号。用户可在【虚假信息云判官】中输入想检测的微博用户的账号信息、发言及发言时间。平台仅根据用户
                    提供的账号信息和发言信息，返回其为僵尸用户的可能性。<br/><br/></p>
            </div>
            <div class="right">
                <img src="../../assets/2.png" alt="">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "introduction"
    }
</script>

<style scoped>

    .introduction {
        background-color: lightskyblue;
        width: 80%;

    }

    .text {
        display: inline-block

    }

    h1 {
        text-align: left;
        line-height: normal;
        margin-left: 10%;
        color: rgba(255, 255, 255, 100);
    }

    p {
        color: rgba(255, 255, 255, 100);
        font-size: 20px;
        text-align: left;
        line-height: 30px;
        margin-left: 5%;
    }

    img {
        margin-top: 15%;
        vertical-align: middle;
        width: 150px;
        height: 150px;
    }

    .left {
        float: left;
        display: inline-block;
        width: 60%;
    }

    .right {
        justify-content: center;
        align-items: center;
        display: flex;
        width: 40%;
    }

</style>