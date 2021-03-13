<template>
    <div id="news">
        <div class="title">
            <h1 class="content">精选资讯</h1>
        </div>
        <div class="table">
            <div class="list" v-for="list in lists" :key="list.id">
                <div class="picture">
                    <img :src=list.picture alt="picture">
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
        name: "News",
        data() {
            return {
                lists: [
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                    {
                        id: 0,
                        route: '/',
                        name: '网络诈骗也成为困扰很多人群的一大难题',
                        introduction: '据资料显示，2018年，全国侦破“网络水军”团伙犯罪案28起，涉案金额上亿元，抓获犯罪嫌疑人67名，关闭涉案网站31家，关闭各类“网络大V”账号1100余个，涉及被敲诈勒索的企事业单位80余家，关闭违法违规网站上千个。',
                        picture: 'https://vuejs.bootcss.com/images/logo.png'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    #news {
        width: 60%;
    }

    .title {
        margin-top: 5%;
        height: 20%;
        text-align: center;
    }

    .content {
        line-height: 20px;
        margin-top: 5%;
        color: rgba(50, 189, 254, 100);
    }

    .table {
        margin-top: 5%;
        height: 587px;
        overflow-y: auto;
        overflow-x: hidden;
        table-layout: fixed;
    }

    .list {
        border-bottom: 1px solid rgba(215, 215, 215, 100);
        border-left: 1px solid rgba(215, 215, 215, 100);
        width: 100%;
        display: flex;
    }

    .picture {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link {
        margin-top: 4%;
        margin-bottom: 4%;
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
        width: 80%;
    }
</style>