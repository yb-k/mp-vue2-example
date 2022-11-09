<template>
  <v-container class="pa-0">
    <h3>게시글 작성/수정</h3>
    <app-board-regist :id="$route.query.id" />
  </v-container>
</template>

<script>
import AppBoardRegist from '@/modules/board/AppBoardRegist.vue';
export default {
  components: { AppBoardRegist },
};
</script>

<style></style>
