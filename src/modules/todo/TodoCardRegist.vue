<template>
  <v-card elevation="12" outlined shaped>
    <validation-observer ref="observer" slim v-slot="{ invalid }">
      <v-system-bar
        v-bind="{
          color: 'primary',
          dark: true,
        }"
      >
        <v-spacer></v-spacer>
        <v-icon @click="$emit('close')">mdi-close</v-icon>
      </v-system-bar>
      <v-card-title>
        <validation-provider name="내용" rules="required" v-slot="{ errors }" slim>
          <v-text-field
            type="text"
            block
            background-color="white"
            color="black"
            label="내용"
            filled
            persistent-hint
            outlined
            v-model="content"
            :errorMessages="errors"
          />
        </validation-provider>
      </v-card-title>
      <v-card-actions>
        <v-btn small color="primary accent-4" :disabled="invalid" @click="$emit('submit', content)"
          >등록</v-btn
        >
      </v-card-actions>
    </validation-observer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    };
  },
};
</script>

<style></style>
