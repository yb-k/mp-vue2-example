<template>
  <v-app>
    <app-navigator />
    <app-header />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.fullpath"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="$route.fullpath"></router-view>
    </v-main>
  </v-app>
</template>
<script>
import AppNavigator from '@/components/AppNavigator.vue';
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: { AppNavigator, AppHeader },
};
</script>
