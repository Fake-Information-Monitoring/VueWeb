<template>
    <v-container>
        <v-tooltip right>
            <template v-slot:activator="{on,attrs}">
                <v-card elevation="0" max-width="110">
                    <v-card-actions>
                        <div>文件上传</div>
                        <v-icon v-bind="attrs" v-on="on">mdi-tooltip-text</v-icon>
                    </v-card-actions>
                </v-card>
            </template>
            <span v-html="tooltip"></span>
        </v-tooltip>
        <v-dialog v-model="FirstDialog" max-width="1200">
            <template v-slot:activator="{on,attrs}">
                <v-row>
                    <v-col justify="center">
                        <v-card elevation="0" light v-on="on" v-bind="attrs">
                            <v-card-actions class="justify-center">
                                <v-icon large class="justify-center">
                                    mdi-plus-thick
                                </v-icon>
                            </v-card-actions>
                            <v-card-text class="text-h3 text-center">
                                <div>
                                    点此上传文件
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
            <v-dialog v-model="SecondDialog" max-width="600">
                <template v-slot:activator="{on,attrs}">
                    <v-card class="overflow-hidden" v-show="!SecondDialog">
                        <v-card-title>
                            选择key类型
                        </v-card-title>
                        <v-card-text>
                            数据KEY是用于验证和授权的密钥，不同KEY的类型不可混用，你可以创建更多的类型。
                        </v-card-text>
                        <v-row class="pl-4 pr-4 mt-4 mb-4">
                            <v-col v-for="item in keyItems" :key="item.title" outlined tile v-on="on"
                                   v-bind="attrs">
                                <v-card min-height="170" v-on:click="Types(item)">
                                    <v-card-title class="justify-center">
                                        {{item.title}}
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-text class="d-flex justify-center">
                                        <div class="d-flex text-center" v-html="item.features"></div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </template>
                <v-card class="pa-4">
                    <v-card-title class="text-h4">训练集上传</v-card-title>
                    <v-card-text class="mt-8">
                        <v-text-field v-model="fileName" outlined clearable placeholder="请输入训练集的名字"></v-text-field>
                        <v-file-input accept="csv/*" v-model="files" color="accent-4" counter label="File input"
                                      placeholder="选择上传的文件" outlined>
                        </v-file-input>
                    </v-card-text>
                    <v-card-actions class="mt-auto justify-end d-flex">
                        <v-btn color="primary" v-on:click="Uploader">创建</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-dialog>
    </v-container>
</template>

<script>
    export default {
        name: "FileUpload",
        data: () => ({
            FirstDialog: false,
            SecondDialog: false,
            fileName: "",
            ApplicationType: "",
            files: null,
            tooltip: "按照开发文档中的格式要求<br>根据自己的需求自上传训练集<br>具体训练结果在应用管理中查询",
            keyItems: [
                {
                    title: '智能分词',
                    features: "",
                    ApplicationType: "Sensitive"
                }, {
                    title: '谣言检测',
                    features: '',
                    ApplicationType: "Rumor"
                },
                // {
                //     title: '网络水军检测',
                //     features: '',
                //     ApplicationType: "FakeUser"
                // }
            ]
        }),
        methods: {
            Types(item) {
                this.ApplicationType = item.ApplicationType
            },
            Uploader() {
                console.log(this.fileName)
                console.log(this.ApplicationType)
                let formData = new FormData()
                if (this.files) {
                    formData.append('file',this.files)
                    this.axios.post('/upload/uploadFile', {
                            "file": formData
                        },
                        {
                            headers: {
                                appName: this.fileName,
                                type: this.ApplicationType
                            }
                        })
                }

            }
        },

    }
</script>

<style scoped>

</style>