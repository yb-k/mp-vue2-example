<template>
  <div class="progress-box text-center" style="margin-top: 30vh">
    <v-progress-circular indeterminate color="white"></v-progress-circular>
  </div>
</template>

<script>
import { ENUM_LAYOUT } from '@/common/constants';
export default {
  layout: ENUM_LAYOUT.SIMPLE,
};
</script>

<style scoped></style>
