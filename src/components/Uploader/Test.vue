<template>
    <div class="test">
        <div class="title">
            <h1 class="content">技术体验</h1>
        </div>
        <div class="link">
            <ul id="nav">
                <li v-for="list in lists" :key="list.id">
                    <router-link :to="list.route">{{list.name}}</router-link>
                </li>
            </ul>
        </div>
        <div class="child-view">
            <transition >
                <keep-alive>
                    <router-view class="view"/>
                </keep-alive>
            </transition>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                lists: [
                    {
                        id: '0',
                        name: '词法分析',
                        route: '/test/indecency'
                    },
                    {
                        id: '1',
                        name: '情感分析',
                        route: '/test/recognition'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .test {
        width: 80%;
        margin-left: 10%;
    }

    .title {
        text-align: center;
    }

    .link {

        text-align: center;
    }

    #nav li {
        display: inline;
        position: relative;
        margin: 0 0.6em;
    }

    #nav {
        padding-inline-start: 0;
    }
    .view{
        margin-left: 10%;
    }
</style>