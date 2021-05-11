<template>
    <v-container>
        <div>应用管理</div>
        <v-row class="mt-6">
            <v-dialog v-model="FirstDialog" max-width="1200" class="justify-center">
                <template v-slot:activator="{on,attrs}">
                    <v-container class="d-flex">
                        <v-btn color="primary" v-if="!isEmpty" v-on="on" v-bind="attrs">
                            创建应用
                        </v-btn>
                    </v-container>
                    <v-col v-show="isEmpty">
                        <v-row justify="center">
                            <v-card elevation="0" light>
                                <v-card-actions class="justify-center" v-on="on" v-bind="attrs">
                                    <v-icon large class="justify-center">
                                        mdi-plus-thick
                                    </v-icon>
                                </v-card-actions>
                                <v-card-text class="text-h3 text-center">
                                    <div>
                                        暂无应用,创建应用
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-col>
                    <v-list v-show="!isEmpty" class="flex">
                        <v-list-group v-for="key in UserKeys" :key="key.ApplicationKeyName"
                                      v-model="key.active" no-action>
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{key.ApplicationName}}
                                    </v-list-item-title>
                                    <v-list-item-action-text>
                                        {{key.KeyType}}
                                    </v-list-item-action-text>
                                </v-list-item-content>
<!--                                <v-spacer/>-->
<!--                                <v-list-item-action-text elevation="0">-->
<!--                                    <span style="color: #0092ee">-->
<!--                                        添加数据key-->
<!--                                    </span>-->
<!--                                </v-list-item-action-text>-->
                            </template>
                            <v-list-item >
                                <v-list-item>
                                    <v-row justify="space-between">
                                        <v-col cols="2">Key名称</v-col>
                                        <v-col cols="8">Key</v-col>

                                    </v-row>
                                </v-list-item>
                            </v-list-item>

                            <v-divider/>
                            <v-list-item>
                                <v-list-item>
                                    <v-row justify="space-between">
                                        <v-col cols="2">{{key.KeyName}}</v-col>
                                        <v-col cols="8">{{key.Key}}</v-col>
                                    </v-row>
                                </v-list-item>
                                <v-divider/>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </template>
                <v-dialog v-model="SecondDialog" max-width="800" class="justify-center">
                    <template v-slot:activator="{on,attrs}">
                        <v-card class="overflow-hidden justify-center" v-show="!SecondDialog">
                            <v-card-title>
                                <span class="headline">选择应用版本</span>
                            </v-card-title>
                            <v-row class="pl-4 pr-4 mt-4 mb-4">
                                <v-col v-for="item in items" :key="item.title" outlined tile v-on="on" v-bind="attrs">
                                    <v-card @click="ApplicationTypes(item)" color="primary" >
                                        <v-card-title class="justify-center">
                                            <span class="white--text">{{item.title}}</span>
                                        </v-card-title>
<!--                                        <v-divider></v-divider>-->
<!--                                        <v-card-text>-->
<!--                                            <ul style="color: #0092ee">-->
<!--                                                <li v-for="(feature,n) in item.features" :key="n">-->
<!--                                                    <span style="color: black">{{ feature }}</span>-->
<!--                                                </li>-->
<!--                                            </ul>-->
<!--                                        </v-card-text>-->
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>
                    <v-dialog v-model="ThirdDialog" max-width="540">
                        <template v-slot:activator="{on, attrs}">
                            <v-card v-show="!ThirdDialog">
                                <v-card-title>
                                    填写识别数据应用名称
                                </v-card-title>
                                <v-card-text class="pb-1">
                                    应用名称
                                    <v-text-field v-model="ApplicationName" class="ml-1 mr-1" counter="20"
                                                  placeholder="最多输入20个字符，可以使用中文、英文、数字、下划线" clearable
                                                  outlined></v-text-field>
                                </v-card-text>
                                <v-card-actions class="mt-auto justify-end d-flex">
                                    <v-btn class="white--text" color="primary" v-on="on" v-bind="attrs">下一步</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                        <v-card>
                            <v-card-title>
                                填写识别数据应用名称
                            </v-card-title>
                            <v-card-text class="pb-1">
                                key的名称
                                <v-text-field class="ml-1 mr-1" counter="15" v-model="KeyName"
                                              placeholder="最多输入15个字符，可以使用中文、英文、数字、下划线" clearable
                                              outlined></v-text-field>
                            </v-card-text>
                            <v-card-actions class="mt-auto justify-end d-flex">
                                <v-btn v-on:click="Application" color="primary">创建</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-dialog>
            </v-dialog>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: "ApplicationManager",
        data: () => ({
            FirstDialog: false,
            SecondDialog: false,
            ThirdDialog: false,
            FourthDialog: false,
            isEmpty: true,
            ApplicationType: "",
            ApplicationName: "",
            KeyType: "",
            KeyName: "",
            items: [{
                title: '关键词过滤',
                features: [],
                ApplicationType: "Sensitive"
            }, {
                title: '谣言检测',
                features: [],
                ApplicationType: "Rumor"
            },
            ],
            keyItems: [
                {
                    icon: "mdi-web",
                    title: "Web Api",
                    description: "提供API形式<br>调用识别结果<br>",
                    keyType: "Web",
                },
                {
                    icon: "mdi-android",
                    title: "Android SDK",
                    description: "提供Android SDK<br>获取识别结果<br>暂未开放",
                    keyType: "Android",
                },
                {
                    icon: "mdi-apple",
                    title: "IOS SDK",
                    description: "提供IOS SDK<br>获取识别结果<br>暂未开放",
                    keyType: "IOS",
                }
            ],
            UserKeys: []
        }),
        methods: {
            ApplicationTypes(item) {
                this.ApplicationType = item.ApplicationType
            },
            Application() {
                this.axios.post(
                    "cdKey/createToken",
                    {
                        "type": this.ApplicationType,
                        "name": this.KeyName,
                        "enterpriseName": this.ApplicationName
                    }
                ).then(() => {
                    this.$router.go(0)
                    this.GetApplicationList()

                })
            },
            GetApplicationList() {
                this.axios.get("getInfo/getUserKey").then(response => {
                    let keyList = response.data.msg
                    if (keyList.length === 0) {
                        this.isEmpty = true
                    } else {
                        this.isEmpty = false

                        let UserKeys = this.UserKeys
                        keyList.forEach((key)=> {
                            let keyMsg = []
                            keyMsg['active'] = false
                            keyMsg['ApplicationName'] = key.enterpriseName
                            keyMsg['KeyName'] = key.keyName
                            keyMsg['KeyType'] = key.keyType
                            keyMsg['Key'] = key.key
                            keyMsg['model'] = key.model
                            UserKeys.push(keyMsg)

                        })
                    }
                })
                this.$forceUpdate()
            }
        },
        computed: {
            Show() {
                return this.FirstDialog || this.SecondDialog || this.ThirdDialog
            }
        },
        watch: {
            Show() {
                this.$forceUpdate()
            },

        },
        created() {
            this.GetApplicationList()
        }
    }
</script>

<style scoped>

</style>