<template>
  <v-app>
    <v-app-bar app color="cyan">
      <v-toolbar-title class="headline">
        <span>ethereum.network</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    //
  }),
};
</script>
