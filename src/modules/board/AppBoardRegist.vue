<template>
  <v-row class="pa-5">
    <validation-observer ref="observer" tag="fragment" v-slot="{ invalid }">
      <v-col cols="12">
        <validation-provider name="제목" rules="required" v-slot="{ errors }">
          <v-text-field
            type="text"
            background-color="white"
            color="black"
            label="제목"
            filled
            persistent-hint
            outlined
            v-model="state.title"
            :errorMessages="errors"
          />
        </validation-provider>
      </v-col>

      <v-col cols="12">
        <validation-provider name="내용" rules="required" v-slot="{ errors }">
          <v-textarea
            background-color="white"
            color="black"
            label="내용"
            filled
            persistent-hint
            outlined
            v-model="state.content"
            :errorMessages="errors"
          />
        </validation-provider>
      </v-col>
      <v-col cols="12" class="text-caption">썸네일</v-col>
      <v-col cols="12">
        <app-file-upload-btn v-model="state.thumnail" />
        <br />
        <v-btn block color="gray" :disabled="!state.thumnail" @click="state.thumnail = ''"
          >썸네일 초기화</v-btn
        >
      </v-col>
      <v-col cols="12">
        <v-btn block color="primary" :disabled="invalid" @click="onSubmit">저장</v-btn>
      </v-col>
    </validation-observer>
  </v-row>
</template>

<script>
import { boardService } from '@/services/api';
import _merge from 'lodash/merge';
import AppFileUploadBtn from '../file/AppFileUploadBtn.vue';
import { ACTIONS, VIEW_NAVI } from '@/common/constants';
import { mapActions } from 'vuex';
const INIT_STATE = () => ({
  title: '',
  content: '',
  thumnail: '',
});
export default {
  components: { AppFileUploadBtn },
  props: ['id'],
  data() {
    return {
      state: INIT_STATE(),
      info: null,
      editable: false,
    };
  },
  async created() {
    if (this.id) {
      try {
        const info = await this.fetchInfo(this.id);
        _merge(this.state, info);
        this.editable = true;
      } catch (error) {
        console.error(error);
        this.$alert('게시글을 불러오지 못했습니다.');
      }
    }
  },
  methods: {
    ...mapActions({
      fetchInfo: ACTIONS.BOARD.DETAIL,
    }),
    async onSubmit() {
      let result;
      const params = {
        title: this.state.title,
        content: this.state.content,
        thumnail: this.state.thumnail,
      };
      if (this.editable) {
        result = await boardService.patch(`/${this.id}`, params);
      } else {
        result = await boardService.post('', params);
      }
      await this.$alert('저장되었습니다.');
      this.$router.replace({ name: VIEW_NAVI.BOARD_DETAIL, params: { id: result.id } });
    },
  },
};
</script>

<style></style>
