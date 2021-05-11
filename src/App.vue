<template>
  <v-app>
    <TopToolBar/>
    <v-main>
      <v-fab-transition>
        <router-view/>
      </v-fab-transition>
    </v-main>

  </v-app>

</template>

<script>

import TopToolBar from "@/components/TopToolBar";
export default {
  name: 'App',
  components: {TopToolBar},
  data: () => ({
    //
  }),
};
</script>

