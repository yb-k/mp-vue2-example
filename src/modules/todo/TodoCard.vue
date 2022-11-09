<template>
  <v-card elevation="12" outlined shaped>
    <v-system-bar
      v-bind="
        !completed && {
          color: 'primary',
          dark: true,
        }
      "
    >
      <v-spacer></v-spacer>
      <v-icon @click="$emit('delete')">mdi-close</v-icon>
    </v-system-bar>
    <v-card-title v-text="content">content</v-card-title>
    <v-card-actions v-if="!completed">
      <v-btn small color="primary accent-4" @click="$emit('finish')">완료</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      require: true,
    },
    completed: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style></style>
