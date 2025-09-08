<script setup lang="ts">
import OnePageLayout from './components/OnePageLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'SortTec - Sortieren. Prüfen. Vertrauen.',
  meta: [
    {
      name: 'description',
      content: 'SortTec bietet professionelle Dienstleistungen in Montage, Nacharbeit, Sortieren, Messen/Prüfen, Verpacken und Etikettieren.'
    }
  ]
})
</script>

<template>
  <OnePageLayout />
</template>

<style>
/* Global styles are handled in main.css */
</style>
