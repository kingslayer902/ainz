
<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold text-gray-900">{{ title }}</h2>
    <p class="text-gray-500 mt-2">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'subtitle'])
</script>
