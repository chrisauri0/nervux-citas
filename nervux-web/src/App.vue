<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '../src/components/public-components/Header.vue'
</script>

<template>
  <v-app>
    <Header />
    <router-view />
  </v-app>
</template>
