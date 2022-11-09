<template>
  <v-navigation-drawer app fixed v-model="showMenu">
    <v-list dense>
      <v-list-item
        :key="`menu-${menu.label}`"
        v-for="menu in filteredMenus"
        @click="move(menu.path)"
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
import { ACTIONS, GETTERS, VIEW_NAVI } from '@/common/constants';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'app-navigator',
  data() {
    return {
      showMenu: false,
      menus: [
        {
          label: 'Home',
          path: VIEW_NAVI.HOME,
          icon: 'mdi-home',
          role: 'all',
        },
        {
          label: 'Todos',
          path: VIEW_NAVI.TODOS,
          icon: 'mdi-run',
          role: 'all',
        },
        {
          label: 'Login',
          path: VIEW_NAVI.LOGIN,
          icon: 'mdi-login',
          role: 'anonymous',
        },
        {
          label: 'Profile',
          path: VIEW_NAVI.USER_PROFILE,
          icon: 'mdi-account',
          role: 'user',
        },
        {
          label: 'Logout',
          path: '/logout',
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
  computed: {
    ...mapGetters({
      isAnonymous: GETTERS.AUTH.IS_ANONYMOUS,
    }),
    filteredMenus() {
      return this.menus.filter(({ role }) => {
        const roles = ['all', this.isAnonymous ? 'anonymous' : 'user'];
        return roles.includes(role);
      });
    },
  },
  methods: {
    ...mapActions({ logout: ACTIONS.AUTH.LOGOUT }),
    async move(path) {
      if (path === '/logout') {
        await this.logout();
        await this.$alert('로그아웃되었습니다.');
        this.$router.push({ name: VIEW_NAVI.HOME });
      } else {
        this.$router.push({ name: path });
      }
    },
  },
  beforeDestroy() {
    this.$eventBus.$off('toggleSideBar');
  },
};
</script>
