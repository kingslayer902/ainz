
<template>
  <div class="bg-white p-6 shadow-md rounded-lg text-center">
    <p class="text-gray-700 mb-4">"{{ testimonial }}"</p>
    <h4 class="font-semibold text-blue-600">{{ name }}</h4>
  </div>
</template>

<script setup>
defineProps(['testimonial', 'name'])
</script>
