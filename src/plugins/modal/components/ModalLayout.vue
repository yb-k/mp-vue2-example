<template>
  <v-dialog value transition="dialog-top-transition" max-width="600" persistent>
    <v-card>
      <v-toolbar color="primary" dark><slot name="title">알림</slot></v-toolbar>
      <v-card-text>
        <div class="text-h2 pa-12"><slot></slot></div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text @click="$emit('onClose')">닫음</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'modal-layout',
};
</script>

<style></style>
