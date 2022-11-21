<template>
  <v-row class="pa-5">
    <v-col cols="12">
      <v-text-field
        type="text"
        counter="25"
        background-color="white"
        color="black"
        label="EMAIL"
        filled
        persistent-hint
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-text-field
        type="password"
        background-color="white"
        color="black"
        label="PASSWORD"
        filled
        persistent-hint
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-checkbox label="자동로그인" color="black"></v-checkbox>
    </v-col>
    <v-col cols="12">
      <v-btn block color="primary">로그인</v-btn>
    </v-col>
    <v-col cols="12">
      <v-btn block color="white">회원가입</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { ENUM_LAYOUT } from '@/common/constants';

export default {
  layout: ENUM_LAYOUT.SIMPLE,
  name: 'login',
};
</script>

<style scoped></style>
