<template>
  <v-row class="pa-5">
    <validation-observer ref="observer" tag="fragment" v-slot="{ invalid }">
      <v-col cols="12">
        <validation-provider name="이메일" rules="required|email" v-slot="{ errors }">
          <v-text-field
            type="text"
            counter="25"
            background-color="white"
            color="black"
            label="EMAIL"
            filled
            persistent-hint
            outlined
            v-model="state.email"
            :errorMessages="errors"
          ></v-text-field>
        </validation-provider>
      </v-col>
      <v-col cols="12">
        <validation-provider name="비밀번호" rules="required" v-slot="{ errors }">
          <v-text-field
            type="password"
            background-color="white"
            color="black"
            label="PASSWORD"
            filled
            persistent-hint
            outlined
            v-model="state.password"
            :errorMessages="errors"
          ></v-text-field>
        </validation-provider>
      </v-col>
      <v-col cols="12">
        <v-checkbox label="자동로그인" v-model="handleSave" color="black"></v-checkbox>
      </v-col>
      <v-col cols="12">
        <v-btn block :disabled="invalid" color="primary" @click="onSubmit">로그인</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn block color="white" @click="registUser">회원가입</v-btn>
      </v-col>
    </validation-observer>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import _cloneDeep from 'lodash/cloneDeep';
import { ACTIONS, ENUM_LAYOUT, GETTERS, MUTATIONS, VIEW_NAVI } from '@/common/constants';

const INIT_STATE = () => ({
  email: '',
  password: '',
});
export default {
  layout: ENUM_LAYOUT.SIMPLE,
  name: 'login',
  data() {
    return {
      state: INIT_STATE(),
    };
  },
  created() {
    this.state.save = this.isSave;
  },
  computed: {
    ...mapGetters({
      isSave: GETTERS.AUTH.IS_SAVE,
    }),
    handleSave: {
      get() {
        return this.isSave;
      },
      set(value) {
        this.changeIsSave(value);
      },
    },
  },
  methods: {
    ...mapMutations({ changeIsSave: MUTATIONS.AUTH.IS_SAVE }),
    ...mapActions({ login: ACTIONS.AUTH.LOGIN }),
    async onSubmit() {
      const params = _cloneDeep(this.state);
      try {
        await this.login(params);
      } catch (err) {
        console.error(err);
      }
      this.$router.replace({ name: VIEW_NAVI.HOME });
    },
    registUser() {
      this.$router.push({ name: VIEW_NAVI.USER_REGIST });
    },
  },
};
</script>

<style scoped></style>
