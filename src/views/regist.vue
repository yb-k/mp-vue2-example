<template>
  <div>
    <div class="text-h5" v-text="'회원가입'"></div>
    <form>
      <v-row class="pa-5">
        <v-col cols="12">
          <v-text-field
            type="text"
            background-color="white"
            color="black"
            name="email"
            label="EMAIL"
            filled
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="text"
            background-color="white"
            color="black"
            label="NAME"
            name="name"
            filled
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="password"
            background-color="white"
            color="black"
            label="PASSWORD"
            name="password"
            filled
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit" block color="primary">저장</v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script></script>

<style></style>
