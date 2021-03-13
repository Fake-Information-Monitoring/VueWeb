<template>
    <div id="recommend">
        <div>
            <div class="title">
                <h1 class="content">推荐场景</h1>
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