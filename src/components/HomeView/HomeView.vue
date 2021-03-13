<template>
    <div class="home-view">
        <Introduction class="view"/>
        <Advantages class="view"/>
        <Recommend class="view"/>
        <News class="view"/>
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
        height: auto;
    }

    #news {
        width: 60%;
        padding-left: 10%;
    }

</style>
