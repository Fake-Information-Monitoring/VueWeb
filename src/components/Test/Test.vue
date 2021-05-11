<template>
    <div class="test">
            <v-container class="display-2 align-center mt-6">
                <v-row >
                    <v-col cols="12">
                        <v-row align="center" justify="center">
                            效果体验
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>

        <v-tabs centered class="mt-4">
            <v-tab v-for="list in lists" :key="list.id" :to="list.route" :ripple="false" class="font-weight-bold"
                   min-width="96">
                {{list.name}}
            </v-tab>
        </v-tabs>
        <v-fade-transition>
            <router-view class="view"/>
        </v-fade-transition>

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
                        name: '关键词过滤',
                        route: '/test/'
                    },
                    {
                        id: '1',
                        name: '谣言分析',
                        route: '/test/rumor'
                    },
                    // {
                    //     id: '2',
                    //     name: '虚假用户分析',
                    //     route: '/test/recognition'
                    // }
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

        margin: 0 0.6em;
    }

    #nav {
        padding-inline-start: 0;
    }

    .view {
        margin-left: 10%;
    }
</style>