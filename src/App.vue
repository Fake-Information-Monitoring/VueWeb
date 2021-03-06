<template>
    <div id="app">
        <TopToolBar class="top-tool-bar"/>
        <Main/>
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
</style>
