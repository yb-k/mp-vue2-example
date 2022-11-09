<template>
  <v-sheet>
    <v-row dense>
      <v-col cols="3" class="font-weight-medium">제목</v-col>
      <v-col cols="9" v-text="info.title"></v-col>
      <v-col cols="3" class="font-weight-medium">작성자</v-col>
      <v-col cols="9" v-text="info.writer.name">작성자</v-col>
      <v-col cols="3" class="font-weight-medium">작성일</v-col>
      <v-col cols="9" v-text="info.regDate">2022-11-03</v-col>
      <v-col cols="12" v-if="info.thumnail">
        <v-img :src="info.thumnail_url"></v-img>
      </v-col>
      <v-col cols="12">
        <pre class="text-body-1" v-text="info.content" />
      </v-col>
    </v-row>
    <v-fab-transition v-if="info.writeable">
      <v-btn color="primary" dark fixed bottom right fab @click="editBoard">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex';
import { GETTERS, VIEW_NAVI } from '@/common/constants';
export default {
  computed: {
    ...mapGetters({
      info: [GETTERS.BOARD.DETAIL],
    }),
  },
  created() {
    window.vm = this;
  },
  methods: {
    editBoard() {
      this.$router.push({ name: VIEW_NAVI.BOARD_REGIST, query: { id: this.info.id } });
    },
  },
};
</script>

<style></style>
