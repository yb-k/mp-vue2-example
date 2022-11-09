<template>
  <validation-observer ref="observer" tag="span" v-slot="{ invalid, handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <v-row class="pa-5">
        <v-col cols="12">
          <validation-provider name="이메일" rules="required|email" v-slot="{ errors }">
            <v-text-field
              type="text"
              background-color="white"
              color="black"
              name="email"
              label="EMAIL"
              filled
              persistent-hint
              outlined
              :errorMessages="errors"
              v-model="state.email"
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col cols="12">
          <validation-provider name="이름" rules="required" v-slot="{ errors }">
            <v-text-field
              type="text"
              background-color="white"
              color="black"
              label="NAME"
              name="name"
              filled
              persistent-hint
              outlined
              v-model="state.name"
              :errorMessages="errors"
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col cols="12">
          <validation-provider name="비밀번호" :rules="'required'" v-slot="{ errors }">
            <v-text-field
              type="password"
              background-color="white"
              color="black"
              label="PASSWORD"
              name="password"
              filled
              persistent-hint
              outlined
              v-model="state.password"
              :errorMessages="errors"
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit" block color="primary" :disabled="invalid">저장</v-btn>
        </v-col>
      </v-row>
    </form>
  </validation-observer>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep';
import { authService, userService } from '@/services/api';
import { ACTIONS, VIEW_NAVI } from '@/common/constants';
import { mapActions } from 'vuex';
const INIT_STATE = () => ({
  name: '',
  email: '',
  password: '',
});
export default {
  props: {
    profile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: INIT_STATE(),
      info: null,
    };
  },
  async created() {
    if (this.profile) {
      try {
        const info = await this.fetchSession();
        this.info = info;
        this.state.email = info.email;
        this.state.name = info.name;
        this.state.password = info.password;
      } catch (error) {
        console.error(error);
        await this.$alert('세션 정보를 불러오지 못했습니다. 홈으로 이동합니다.');
        this.$router.replace({ name: VIEW_NAVI.HOME });
      }
    }
  },
  methods: {
    ...mapActions({
      fetchSession: ACTIONS.AUTH.SESSION,
    }),
    async onSubmit() {
      const { name, email, password } = _cloneDeep(this.state);
      if (this.profile) {
        await userService.patch(`/${this.info.id}`, { name, email, password });
      } else {
        await authService.regist(name, email, password);
      }
      await this.$alert('저장되었습니다.');
      if (!this.profile) this.$router.replace({ name: VIEW_NAVI.LOGIN });
    },
  },
};
</script>

<style></style>
