<template>
  <div class="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
    <img
      v-if="image"
      :src="image"
      alt="Service Image"
      class="w-20 h-20 object-cover rounded-full mx-auto mb-4"
    />
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'description', 'image'])
</script>
