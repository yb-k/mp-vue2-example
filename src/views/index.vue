<template>
  <v-container class="pa-4">
    <v-row dense>
      <v-col cols="12">
        <v-card color="secondary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">제목제목</v-card-title>
              <v-card-subtitle>작성자작성자</v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="secondary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">제목제목</v-card-title>
              <v-card-subtitle>작성자작성자</v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="secondary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">제목제목</v-card-title>
              <v-card-subtitle>작성자작성자</v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn color="primary" dark fixed bottom right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>
<route>
{
  "name": "home",
  "meta": {
    "keepAlive": true
  } 
}
</route>
<script></script>

<style scoped></style>
