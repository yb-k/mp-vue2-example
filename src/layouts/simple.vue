<template>
  <v-app :style="appStyle">
    <v-main>
      <v-container fluid>
        <div class="logo-box text-center">
          <div class="logo-content">
            <div><v-icon class="logo-icon">mdi-vuejs</v-icon></div>
            <span class="white--text font-weight-bold" style="font-size: 2.5rem"
              >Vue Example App</span
            >
          </div>
        </div>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'none',
  computed: {
    appStyle() {
      const { primary, secondary } = this.$vuetify.theme.defaults.light;
      return {
        backgroundImage: `linear-gradient(153deg, ${primary}, ${secondary})`,
      };
    },
  },
};
</script>

<style scoped>
.logo-box {
  /* display: block; */
  /* position: absolute; */
  width: 100%;
  top: 10%;
  margin-bottom: 15vh;
}
.logo-icon {
  font-size: 12rem;
  color: whitesmoke;
}
</style>
