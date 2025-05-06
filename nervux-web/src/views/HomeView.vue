<route>
  {
    path: "/"
  }
  </route>
<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
// Removed definePage as it is not a valid export from vue-router
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
