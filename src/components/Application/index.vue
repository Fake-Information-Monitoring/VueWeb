<template>
    <div class="application">
        <div class="aside">
            <Left/>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Left from "@/components/Application/Left";
    export default {
        name: "Manager",
        components: {Left}
    }
</script>

<style scoped>
    .application{

        height: 880px;
        min-height: 880px;
        z-index: 3;
    }
    .aside{
        background-color: #0092ee;
        position: relative;
        left: 0;
        top: 0;
        height: 100%;
        width: 10%;
    }
</style>