<template>
  <div>
    <div class="text-h5" v-text="'회원가입'"></div>
    <app-user-regist />
  </div>
</template>

<script>
import AppUserRegist from '@/modules/auth/AppUserRegist.vue';
export default {
  components: { AppUserRegist },
};
</script>

<style></style>
