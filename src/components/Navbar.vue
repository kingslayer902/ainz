<template>
  <nav class="bg-white shadow px-4 py-3 flex justify-between items-center">
    <!-- Logo -->
    <div class="text-2xl font-bold text-blue-600 flex items-center gap-2">
      ❄️ <span>Nexac</span>
    </div>

    <!-- Hamburger Button (Mobile) -->
    <button
      @click="isOpen = !isOpen"
      class="lg:hidden text-gray-600 focus:outline-none"
    >
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menu Items -->
    <div
      :class="[
        isOpen ? 'block' : 'hidden',
        'w-full mt-4 lg:mt-0 lg:flex lg:items-center lg:space-x-6 lg:w-auto'
      ]"
      class="lg:flex space-y-2 lg:space-y-0 flex-col lg:flex-row"
    >
      <RouterLink to="/" class="hover:text-blue-500">Home</RouterLink>
      <RouterLink to="/about" class="hover:text-blue-500">Tentang</RouterLink>
      <RouterLink to="/services" class="hover:text-blue-500">Layanan</RouterLink>
      <RouterLink to="/contact" class="hover:text-blue-500">Kontak</RouterLink>
      <RouterLink to="/login" class="hover:text-blue-500">Masuk</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
