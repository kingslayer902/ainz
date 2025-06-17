<template>
  <div class="bg-white rounded shadow p-4 hover:shadow-lg transition">
    <h3 class="text-xl font-semibold text-blue-600">{{ service.title }}</h3>
    <p class="text-gray-600 mt-2">{{ service.description }}</p>
  </div>
</template>

<script setup>
defineProps(['service'])
</script>
