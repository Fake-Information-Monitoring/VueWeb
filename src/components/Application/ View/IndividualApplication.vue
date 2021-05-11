<template>

    <v-card elevation="0" max-width="1200">
        <v-card-title class="text-h2">身份认证</v-card-title>
        <v-card-text class="mt-8">
            <v-card-actions>
                <v-text-field v-model="Name" outlined clearable placeholder="请输入您的姓名"></v-text-field>
            </v-card-actions>
            <v-card-actions>
                <v-text-field v-model="IDCard" outlined clearable placeholder="请输入您的身份证"></v-text-field>
            </v-card-actions>
            <v-card-actions>
                <v-text-field v-model="occupation" outlined clearable placeholder="请输入您的从事职业"></v-text-field>
            </v-card-actions>
            <v-btn v-on:click="Application">申请</v-btn>
        </v-card-text>
    </v-card>


</template>

<script>
    export default {
        name: "IndividualApplication",
        data: () => ({
            occupation: "",
            placeOfWork: "",
            IDCard: "",
            Name: ""
        }),
        methods: {
            Application: function () {
                this.axios.post('/getInfo/personCertified',
                    {
                        "name": this.Name,
                        "cardId": this.IDCard,
                        "work": this.occupation
                    }
                )
            }
        }
    }
</script>

<style scoped>

    .backgroundImage {
        z-index: 0;
        display: flex;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        min-width: 1190px;
    }

    .login-page {

        height: 100%;
    }

    .login-box {

        margin-left: 40%;
        margin-right: 40%;
        background-color: rgba(255, 255, 255, 100);
        border: 1px solid rgba(50, 189, 254, 18);
        opacity: 0.99;
        box-shadow: 0 8px 22px 6px rgba(34, 34, 34, 10);
        border-radius: 10px;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    h1 {
        margin: 0;
        font-size: 36px;
    }

    .main-view {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        padding: 10%;
        position: relative;
        box-sizing: border-box;
        text-align: center;
    }

    .box {
        width: 100%;
        margin-top: 15%;
    }

    .box input {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid #ddd;
        color: #aaa;

        font-size: 14px;
        padding: 10px;
        height: 40px;
        vertical-align: middle;
        border-radius: 4px;
    }

    #register {
        box-sizing: border-box;
        vertical-align: middle;
        background: #f7f7f7;

        color: #555;
        display: inline-block;
        height: 36px;
        border: 1px solid #ccc;
        border-radius: 2px;
        width: 100%;
        line-height: 38px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        padding: 0;
    }
</style>