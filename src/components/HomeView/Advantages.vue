<template>

    <div class="advantage">
        <div class="title">
            <h1 class="content">产品优势</h1>
        </div>
        <div class="table">
            <div class="list" v-for="list in lists" :key="list.id">
                <div class="picture">
                    <img :src=list.picture alt="vue logo">
                </div>
                <div class="link">
                    <router-link :to=list.route class="route">{{list.name}}</router-link>
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
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 1,
                        route: '/buytoken',
                        name: '测评室测试计划',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 2,
                        route: '/test',
                        name: '学生健康测试计划',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 3,
                        route: '/login',
                        name: '公司员工测试计划',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 4,
                        route: '/login',
                        name: '公益协会测试计划',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                ]

            }
        },
    }
</script>

<style scoped>

    .advantage {
        width: 80%;
    }

    .title {
        height: 20%;
        text-align: center;
    }

    .content {
        margin-top: 1%;
        margin-bottom: 1%;
        line-height: 20px;
    }

    .table {
        height: 80%;
        float: left;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 10px;
        display: flex;
        text-align: center;
    }

    .list {
        width: 25%;
        border: 2px solid #000000;
        display: table;
    }

    .link{
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