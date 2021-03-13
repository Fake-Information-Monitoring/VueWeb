<template>

    <div id="advantage">
        <div>
            <div class="title">
                <h1 class="content">产品优势</h1>
            </div>
            <div class="table">
                <div class="list" v-for="list in lists" :key="list.id">
                    <div class="picture">
                        <img :src="list.src" alt="">
                    </div>
                    <div class="link">
                        <router-link :to=list.route class="route">{{list.name}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Advantages",
        data() {
            return {
                lists: [
                    {
                        id: 0,
                        route: '/',
                        name: '招聘人员测试计划',
                        src: require("../../assets/MainLogo.png")
                    },
                    {
                        id: 1,
                        route: '/buytoken',
                        name: '测评室测试计划',
                        src: require('../../assets/MainLogo.png')
                    },
                    {
                        id: 2,
                        route: '/test',
                        name: '学生健康测试计划',
                        src: require('../../assets/MainLogo.png')
                    },
                    {
                        id: 3,
                        route: '/login',
                        name: '公司员工测试计划',
                        src: require('../../assets/MainLogo.png')
                    },
                    {
                        id: 4,
                        route: '/login',
                        name: '公益协会测试计划',
                        src: require('../../assets/MainLogo.png')

                    },
                ]

            }
        },
    }
</script>

<style scoped>

    #advantage {
        margin-top: 5%;
        width: 80%;
        padding-bottom: 5%;
        border-bottom: 1px solid rgba(215, 215, 215, 100);
    }

    .title {
        height: 20%;
        text-align: center;
    }

    .content {
        margin-top: 1%;
        margin-bottom: 1%;
        line-height: 20px;
        color: rgba(50, 189, 254, 100);
    }

    .table {
        margin-top: 2.5%;
        height: 80%;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 10px;
        display: flex;
        text-align: center;

    }

    .list {
        width: 25%;
        display: table;
    }

    .link {
        position: center;
    }


    .picture {


    }

    img {
        vertical-align: middle;
        margin-right: auto;
        margin-left: auto;
        width: 40px;
        height: 40px;

    }


</style>