<template>
    <div class="content">
        <transition>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>
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
        min-width: 1190px;
        height: auto;
        margin-top: 60px;
    }
</style>