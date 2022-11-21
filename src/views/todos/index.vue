<template>
  <v-container class="pa-0">
    <v-row>
      <!-- 완료 상태 -->
      <v-col cols="12">
        <v-card elevation="12" outlined shaped>
          <v-system-bar
            v-bind="{
              color: 'primary',
              dark: true,
            }"
          >
            <v-spacer></v-spacer>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>
          <v-card-title>content</v-card-title>
        </v-card>
      </v-col>
      <!-- 미완료 -->
      <v-col cols="12">
        <v-card elevation="12" outlined shaped>
          <v-system-bar>
            <v-spacer></v-spacer>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>
          <v-card-title>content</v-card-title>
          <v-card-actions>
            <v-btn small color="primary accent-4">완료</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card elevation="12" outlined shaped>
          <v-system-bar color="primary" dark>
            <v-spacer></v-spacer>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>
          <v-card-title>
            <v-text-field
              type="text"
              block
              background-color="white"
              color="black"
              label="내용"
              filled
              persistent-hint
              outlined
            />
          </v-card-title>
          <v-card-actions>
            <v-btn small color="primary accent-4">등록</v-btn>
          </v-card-actions>
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

<script></script>
