<template>
    <v-card class="pa-12" color="#87cefa">

        <v-card-title class="text-h2 white--text hidden-sm-and-down ml-16">
            <span class="text-center">虚假信息云判官</span>
        </v-card-title>

        <v-card-title class="text-h2 white--text justify-center hidden-lg-and-up">
            <span class="text-center">虚假信息云判官</span>
        </v-card-title>
        <v-card-text class="hidden-sm-and-down justify-center">
            <div class="left pb-8">
                <span class="text-h5 white--text" style="line-height: 50px" v-html="text"></span>
            </div>
            <div class="right ml-8">
                <img class="justify-center" src="../../assets/MainLogo1.png" alt="">
            </div>
        </v-card-text>

    </v-card>
</template>

<script>
    export default {
        name: "introduction",
        data: () => ({
            text: "&emsp;&emsp;虚假信息云判官基于tfidf词频矩阵与支持向量机机器学习算法，是一个反垃圾社交信息及检测僵尸用户的开放平台。<br>&emsp;&emsp;对诈骗信息、垃圾信息以及僵尸用户进行识别和分类。可实现对色情、暴力、诈骗、等危险信息的检测和对微博僵尸用户的数据分析，为打击网络违法犯罪行动和网络空间秩序整治等应用场景提供有力、高效的技术支持。"
        })
    }
</script>

<style scoped>

    .introduction {
        background-color: #87cefa;
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
        vertical-align: middle;
        width: 40%;
        height: 40%;
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