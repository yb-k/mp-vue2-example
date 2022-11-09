<template>
  <div>
    <div class="text-h5" v-text="'내정보 수정'"></div>
    <app-user-regist profile />
  </div>
</template>

<script>
import AppUserRegist from '@/modules/auth/AppUserRegist.vue';
export default {
  components: { AppUserRegist },
};
</script>

<style></style>
