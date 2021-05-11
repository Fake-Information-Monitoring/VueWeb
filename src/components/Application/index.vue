<template>
    <div class="application">
        <Left/>
        <div>
            <router-view class="mt-12 ml-4"/>
        </div>
    </div>
</template>
<script>
    import Left from "@/components/Application/Left";

    export default {
        name: "Manager",
        components: {Left},
        // beforeRouteEnter(to, from, next) {
        //     next(vm => {
        //         if (vm.$store.state.isLogin === false) {
        //             alert("请登录")
        //             vm.$router.replace({path:'/login'})
        //         }
        //     })
        // }
    }
</script>

<style scoped>
    .application {

        height: 880px;
        min-height: 880px;
        z-index: 3;
    }

    .aside {
        background-color: #0092ee;
        position: relative;
        left: 0;
        top: 0;
        height: 100%;
        width: 10%;
    }
</style>