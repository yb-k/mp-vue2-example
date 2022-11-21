<template>
  <v-container class="pa-4">
    <v-sheet>
      <v-row dense>
        <v-col cols="3" class="font-weight-medium">제목</v-col>
        <v-col cols="9">제목제목</v-col>
        <v-col cols="3" class="font-weight-medium">작성자</v-col>
        <v-col cols="9">홍길동</v-col>
        <v-col cols="3" class="font-weight-medium">작성일</v-col>
        <v-col cols="9">2022-11-03</v-col>
        <v-col cols="12">
          <v-img></v-img>
        </v-col>
        <v-col cols="12">
          <pre class="text-body-1">내용이들어갑니다.</pre>
        </v-col>
      </v-row>
      <v-fab-transition>
        <v-btn color="primary" dark fixed bottom right fab>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-sheet>
  </v-container>
</template>

<script></script>

<style></style>
