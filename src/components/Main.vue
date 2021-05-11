<template>
    <div class="content">
        <v-main>
            <router-view/>
        </v-main>

    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
    .content {

        width: 100%;
        height: auto;
        margin-top: 60px;

    }

</style>