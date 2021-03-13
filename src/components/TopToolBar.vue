<template>
    <div class="header">
        <div class="logo">
            <a href="/" class="web-title">
                <img src="../assets/MainLogo.png">
                <span>虚假信息云判官</span>
            </a>
        </div>
        <ul id="nav">
            <li class="" v-for="tool in ToolBar" :key="tool.id">
                <router-link :to=tool.route class="route">{{tool.name}}</router-link>
            </li>
        </ul>
    </div>


</template>

<script>
    export default {
        name: "TopToolBar",
        data() {
            return {
                ToolBar: [
                    {
                        id: 0,
                        route: '/',
                        name: '首页'
                    },
                    {
                        id: 1,
                        route: '/buytoken',
                        name: '接口使用申请'
                    },
                    {
                        id: 2,
                        route: '/test',
                        name: '效果体验'
                    },
                    {
                        id: 3,
                        route: '/login',
                        name: '登录/注册'
                    }
                ]

            }
        },
        methods: {},
    }


</script>

<style scoped>


    .header {
        background-color: #fff;
        height: 40px;
        padding: 10px 60px;
        background-color: rgba(255, 255, 255, 95);
        border-bottom: 1px solid rgb(165, 88, 88);
        display: inline-flex;
        position: fixed;
        top: 0;
        width: 100%;
        min-width: 1190px;
    }

    #nav li {
        display: inline-block;
        position: relative;
        margin: 0 0.6em;
    }

    #nav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        right: 30px;
        top: 0;
        line-height: 30px;
        position: fixed;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 40px;
        background-color: white;
    }

    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: none;

    }

    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }

    .logo {
        display: inline-block;
        font-size: 1.5em;
        line-height: 40px;
        color: #273849;
        font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        font-weight: 500;
        position: fixed;
        width: 100%;
        min-width: 1190px;


    }

    .logo img {
        vertical-align: middle;
        margin-right: 6px;
        width: 40px;
        height: 40px;
    }

</style>