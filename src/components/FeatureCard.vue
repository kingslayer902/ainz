
<template>
  <div class="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
    <div class="text-3xl mb-4">🌟</div>
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'description'])
</script>
