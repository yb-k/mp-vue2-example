<template>
  <v-card class="d-flex align-center overflow-hidden" filled outlined height="200" @click="onClick">
    <div v-if="value" class="flex-grow-1 text-center">
      <v-img height="200" max-width="100%" :src="fullImagePath"></v-img>
    </div>
    <div v-else class="flex-grow-1 text-center">
      <v-icon>mdi-camera</v-icon>
    </div>
    <input v-show="false" type="file" ref="fileInput" @change="onChange" />
  </v-card>
</template>

<script>
import { fileService } from '@/services/api';
import { API_URL, RUNTIME } from '@/common/config';
import { IMAGE_PICKER } from '@/native/picker';
import { UPLOAD_FILE } from '@/native/net';
import { APP_ENV, OS_ENV } from '@/common/constants';
export default {
  name: 'app-file-upload-btn',
  props: {
    value: {
      type: String,
      require: true,
    },
  },
  computed: {
    fullImagePath() {
      return `${API_URL}${this.value}`;
    },
  },
  methods: {
    async onClick() {
      if (RUNTIME.TYPE === APP_ENV.APP) {
        const { path: imagePath } = await this.$nativeScript(IMAGE_PICKER);
        const { path } = await this.$nativeScript(UPLOAD_FILE, '/file/upload', imagePath);
        this.$emit('input', path);
      } else {
        this.$refs.fileInput.click();
      }
    },
    async onChange(e) {
      const file = e.target.files[0];
      if (file) {
        // eslint-disable-next-line no-unused-vars
        const { path, fullpath } = await fileService.upload(file);
        this.$emit('input', path);
      } else {
        this.$emit('input', '');
      }
      e.target.value = '';
    },
  },
};
</script>

<style></style>
