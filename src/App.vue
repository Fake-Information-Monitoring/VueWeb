<template>
    <div id="app">
        <div class = "TopToolBar">
            <TopToolBar class="top-tool-bar"/>
        </div>
        <div class = "Main">
            <Main/>
        </div>

    </div>
</template>

<script>
    import TopToolBar from "@/components/TopToolBar";
    import Main from "@/components/Main";

    export default {
        name: "App",
        components: {
            Main,
            TopToolBar
        }
    }
</script>

<style>
    a {
        text-decoration: none;
    }
    .Main{
        min-width: 1440px;
    }
</style>
