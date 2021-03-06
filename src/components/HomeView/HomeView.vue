<template>
    <div class="home-view">
        <Introduction id="introduction" class="view"/>
        <Advantages id="advantage" class="view"/>
        <Recommend id="recommend" class="view"/>
        <News id="news" class="view"/>
    </div>

</template>

<script>
    import Advantages from "@/components/HomeView/Advantages";
    import Recommend from "@/components/HomeView/Recommend";
    import Introduction from "@/components/HomeView/Introduction";
    import News from "@/components/HomeView/News";

    export default {
        name: 'HomeView',
        components: {News, Introduction, Recommend, Advantages},
        props: {}
    }
</script>

<style scoped>
    .view {
        width: 80%;
        margin-left: 10%;
    }

    #news {
        width: 60%;
        padding-left: 10%;
    }

</style>
