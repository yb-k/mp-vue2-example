<template>
  <v-app-bar app hide-on-scroll fixed dark color="primary">
    <v-app-bar-nav-icon @click.stop="toggleSideBar"></v-app-bar-nav-icon>
    <v-toolbar-title>Learn Vue App</v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: 'app-header',
  methods: {
    toggleSideBar() {
      this.$eventBus.$emit('toggleSideBar');
    },
  },
};
</script>
