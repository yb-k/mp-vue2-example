<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ACTIONS, STORAGE_KEYS } from './common/constants';
import { STORAGE_DATA } from './native/data';
export default {
  async created() {
    const loginInfo = this.$nativeScript(STORAGE_DATA, STORAGE_KEYS.LOGIN_INFO);
    if (loginInfo) {
      await this.login(loginInfo);
    }
  },
  methods: {
    ...mapActions({
      login: ACTIONS.AUTH.LOGIN,
    }),
  },
};
</script>
