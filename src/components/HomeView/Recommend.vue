<template>
    <div id="recommend">
        <div>
            <div class="title">
                <h1 class="content">推荐场景</h1>
            </div>
            <div class="table">
                <div class="list" v-for="list in lists" :key="list.id">
                    <div class="picture">
                        <img :src="list.picture" alt="vue logo">
                    </div>
                    <div class="link">
                        <div class="route"><span style="color: #0092ee">{{list.name}}</span></div>
                        <p class="introduction">{{list.introduction}}</p>
                    </div>

                </div>
            </div>
        </div>

    </div>


</template>
<script>
    export default {
        name: "Recommend",
        data: () => ({
            lists: [
                {
                    id: 0,
                    name: '识别危险信息以及分类',
                    introduction: '使用SVM支持向量机算法对谣言进行识别判断，模型性能良好。',
                    picture: require('..\\..\\assets\\distinguish.png')
                },
                {
                    id: 1,
                    name: '微博僵尸用户的数据分析',
                    introduction: '采集他们的近期发言，动态，活动时间分布等数据，精确判别。',
                    picture: require('..\\..\\assets\\analysis.png')
                },
                {
                    id: 2,
                    name: '打击网络违法犯罪行动',
                    introduction: '对色情、暴力、诈骗等危险信息进行判别。',
                    picture: require('..\\..\\assets\\cracking.png')
                },
                {
                    id: 3,
                    name: '网络空间秩序整治',
                    introduction: '让网络清朗起来，保护广大青少年免受侵害。',
                    picture: require('..\\..\\assets\\renovation.png')
                },
            ]

        }),
    }
</script>
<style scoped>

    #recommend {
        margin-top: 5%;
        padding-bottom: 5%;
        border-bottom: 1px solid rgba(215, 215, 215, 100);
    }

    .title {
        text-align: center;
        height: auto;
    }

    .content {
        margin-top: 1%;
        margin-bottom: 1%;
        line-height: 20px;
        color: rgba(50, 189, 254, 100);
    }

    .table {
        margin-top: 2.5%;
        height: auto;
    }

    .list {
        width: 50%;
        box-sizing: border-box;
        display: inline-flex;
        line-height: 40px;
    }

    .picture {
        width: 20%;
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        vertical-align: middle;
        position: center;
        width: 40px;
        height: 40px;
    }

    .route {
        width: 80%;
        display: inline;
    }

    .introduction {
        line-height: 20px;
        width: 80%;
        color: rgba(153, 153, 153, 100);
        font-size: 18px;
        text-align: left;
    }


</style>