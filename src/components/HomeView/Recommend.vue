<template>
    <div class="recommend">
        <div class="title">
            <p class="content">推荐场景</p>
        </div>
        <div class="table">
            <div class="list" v-for="list in lists" :key="list.id">
                <div class="picture">
                    <img :src=list.picture alt="vue logo">
                </div>
                <div class="link">
                    <router-link :to=list.route class="route">{{list.name}}</router-link>
                    <p class="introduction">{{list.introduction}}</p>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
    export default {
        name: "Recommend",
        data() {
            return {
                lists: [
                    {
                        id: 0,
                        route: '/',
                        name: '识别危险信息以及分类',
                        introduction: '第一个模块是对色情、诈骗语句的识别以及分类，主要是对色情、暴力、诈骗等危险信息。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 1,
                        route: '/buytoken',
                        name: '识别危险信息以及分类',
                        introduction: '第一个模块是对色情、诈骗语句的识别以及分类，主要是对色情、暴力、诈骗等危险信息。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 2,
                        route: '/test',
                        name: '识别危险信息以及分类',
                        introduction: '第一个模块是对色情、诈骗语句的识别以及分类，主要是对色情、暴力、诈骗等危险信息。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 3,
                        route: '/login',
                        name: '识别危险信息以及分类',
                        introduction: '第一个模块是对色情、诈骗语句的识别以及分类，主要是对色情、暴力、诈骗等危险信息。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                ]

            }
        },
    }
</script>
<style scoped>

    .recommend {
        width: 80%;
        height: 30%;
    }

    .title {
        text-align: center;
        height: 20%;
    }

    .content {
        margin-top: 10px;
        margin-bottom: 10px;
        line-height: 20px;
    }

    .table {

        height: 80%;
    }

    .list {
        display: flex;
        width: 50%;
        float: left;
        box-sizing: border-box;
        /*border: 1px solid red;*/
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
        display: flex;
    }

    .introduction {
        line-height: 20px;
        width: 80%;
        color: rgba(153, 153, 153, 100);
        font-size: 18px;
        text-align: left;
    }


</style>