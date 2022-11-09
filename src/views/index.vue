<template>
  <v-container class="pa-4">
    <app-board-list />
    <v-fab-transition v-if="!isAnonymous">
      <v-btn color="primary" dark fixed bottom right fab @click="registBoard">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>
<route>
{
  "name": "home",
  "meta": {
    "keepAlive": true
  } 
}
</route>
<script>
import { mapGetters } from 'vuex';
import { GETTERS, VIEW_NAVI } from '@/common/constants';
import AppBoardList from '@/modules/board/AppBoardList.vue';
export default {
  components: { AppBoardList },
  computed: {
    ...mapGetters({
      isAnonymous: GETTERS.AUTH.IS_ANONYMOUS,
    }),
  },
  data() {
    return {};
  },
  methods: {
    registBoard() {
      this.$router.push({ name: VIEW_NAVI.BOARD_REGIST });
    },
  },
};
</script>

<style scoped></style>
