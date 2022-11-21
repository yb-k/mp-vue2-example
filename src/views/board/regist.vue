<template>
  <v-container class="pa-0">
    <h3>게시글 작성/수정</h3>
    <v-row class="pa-5">
      <v-col cols="12">
        <v-text-field
          type="text"
          background-color="white"
          color="black"
          label="제목"
          filled
          persistent-hint
          outlined
        />
      </v-col>

      <v-col cols="12">
        <v-textarea
          background-color="white"
          color="black"
          label="내용"
          filled
          persistent-hint
          outlined
        />
      </v-col>
      <v-col cols="12" class="text-caption">썸네일</v-col>
      <v-col cols="12">
        <v-card class="d-flex align-center overflow-hidden" filled outlined height="200">
          <div v-if="false" class="flex-grow-1 text-center">
            <v-img height="200" max-width="100%"></v-img>
          </div>
          <div v-else class="flex-grow-1 text-center">
            <v-icon>mdi-camera</v-icon>
          </div>
        </v-card>

        <br />

        <v-btn block color="gray">썸네일 초기화</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn block color="primary">저장</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style></style>
