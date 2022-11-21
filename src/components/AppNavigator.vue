<template>
  <v-navigation-drawer app fixed v-model="showMenu">
    <v-list dense>
      <v-list-item
        :key="`menu-${menu.label}`"
        v-for="menu in menus"
        @click="$router.push({ name: menu.path })"
      >
        <v-list-item-action>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ menu.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'app-navigator',
  data() {
    return {
      showMenu: false,
      menus: [
        {
          label: 'Home',
          path: 'home',
          icon: 'mdi-home',
          role: 'all',
        },
        {
          label: 'Todos',
          path: 'todos',
          icon: 'mdi-run',
          role: 'all',
        },
        {
          label: 'Login',
          path: 'login',
          icon: 'mdi-login',
          role: 'anonymous',
        },
        {
          label: 'Profile',
          path: 'profile',
          icon: 'mdi-account',
          role: 'user',
        },
        {
          label: 'Logout',
          path: 'logout',
          icon: 'mdi-logout',
          role: 'user',
        },
      ],
    };
  },
  created() {
    this.$eventBus.$on('toggleSideBar', () => {
      this.showMenu = !this.showMenu;
    });
  },
  beforeDestroy() {
    this.$eventBus.$off('toggleSideBar');
  },
};
</script>
