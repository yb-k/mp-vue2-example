<template>
  <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600" persistent>
    <v-card>
      <v-toolbar color="primary" dark>알림</v-toolbar>
      <v-card-text>
        <div class="text-body2 pa-12" v-html="content"></div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text @click="_onAction('cancel')">취소</v-btn>
        <v-btn text @click="_onAction('submit')">확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      content: '',
    };
  },
  methods: {
    _onAction(action) {
      this.onAction(action);
    },
  },
};
</script>

<style></style>
