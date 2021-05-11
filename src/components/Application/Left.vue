<template>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" app>
        <v-list dense>
            <template v-for="item in itemsTop">
                <v-list-group v-if="item.children" :key="item.text" v-model="item.model"
                              :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item v-for="(child, i) in item.children" :key="i" link>
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ child.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-else
                             :key="item.text"
                             link
                             :to="item.to"
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>


        </v-list>

        <template v-slot:append>
            <v-list dense>
                <template v-for="item in itemsBottom">
                    <v-list-group v-if="item.children" :key="item.text" v-model="item.model"
                                  :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(child, i) in item.children" :href="child.to" :key="i" link >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item v-else
                                 :key="item.text"
                                 link
                                 :to="item.to" v-show="item.isShow">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </template>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Left",
        data: () => ({
            itemsTop: [
                {icon: 'mdi-history', 'icon-alt': 'mdi-history', text: '应用管理',to: '/ApplicationManager/ApplicationManager'},
                {icon: 'mdi-content-copy', text: '训练集上传', to: '/ApplicationManager/FileUploader'},
                {icon: 'mdi-file-document', text: '开发文档', to: ''},
                // {icon: 'mdi-map' ,text: '言论检测', to: '/ApplicationManager/Map'}
            ],
            itemsBottom: [
                {icon: 'mdi-contacts', text: '使用认证', to: '/ApplicationManager/IndividualApplication', isShow: true},
                {icon: 'mdi-keyboard', text: '效果体验', to: '/Test', isShow: true},
            ]
        }),
        computed: {
            isShow() {
                return this.$store.state.UserInformation.hasApplication
            }
        },
        watch: {
            isShow() {
                this.itemsBottom[0].isShow = !this.$store.state.UserInformation.hasApplication
            }
        }
    }
</script>

<style scoped>

</style>