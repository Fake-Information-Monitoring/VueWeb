<template>

    <v-container id="advantage">
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
                        <div style="color: #0092ee" class="route">{{list.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
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
                        name: '工作高效',
                        src: require("../../assets/efficiently.png")
                    },
                    {
                        id: 1,
                        route: '/',
                        name: '海量数据',
                        src: require('../../assets/data.png')
                    },
                    {
                        id: 2,
                        route: '/',
                        name: '后端稳定',
                        src: require('../../assets/stable.png')
                    },
                    {
                        id: 3,
                        route: '/',
                        name: '判别准确',
                        src: require('../../assets/discrimination.png')
                    },
                    {
                        id: 4,
                        route: '/',
                        name: '算法领先',
                        src: require('../../assets/leading.png')

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