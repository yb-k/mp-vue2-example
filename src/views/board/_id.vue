<template>
  <v-container class="pa-4">
    <app-board-detail />
  </v-container>
</template>

<script>
import AppBoardDetail from '@/modules/board/AppBoardDetail.vue';
import { ACTIONS, VIEW_NAVI } from '@/common/constants';
import { mapActions } from 'vuex';
export default {
  components: { AppBoardDetail },
  beforeRouteEnter(to, from, next) {
    if (!to.params.id) {
      next({ name: VIEW_NAVI.HOME });
      return;
    }
    next();
  },
  async created() {
    try {
      await this.fetchInfo(this.$route.params.id);
    } catch (error) {
      console.error(error);
      await this.$alert('게시글을 찾지 못했습니다.');
      this.$router.go(-1);
    }
  },
  methods: {
    ...mapActions({
      fetchInfo: ACTIONS.BOARD.DETAIL,
    }),
  },
};
</script>

<style></style>
