<template>
  <nav class="bg-white shadow px-4 py-3 flex justify-between items-center relative">
    <!-- Logo -->
    <div class="text-2xl font-bold text-blue-600 flex items-center gap-2">
      ❄️ <span>Nexac</span>
    </div>

    <!-- Hamburger Button (Mobile) -->
    <button
      @click="isOpen = !isOpen"
      class="lg:hidden text-gray-700 focus:outline-none z-20"
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
        'absolute top-full left-0 w-full bg-white shadow-md px-4 py-3 lg:static lg:shadow-none lg:flex lg:items-center lg:space-x-6 lg:w-auto'
      ]"
      class="transition-all duration-200 ease-in-out z-10"
    >
      <RouterLink
        to="/"
        class="block py-2 lg:py-0 hover:text-blue-500"
        @click="isOpen = false"
      >Home</RouterLink>
      <RouterLink
        to="/about"
        class="block py-2 lg:py-0 hover:text-blue-500"
        @click="isOpen = false"
      >Tentang</RouterLink>
      <RouterLink
        to="/services"
        class="block py-2 lg:py-0 hover:text-blue-500"
        @click="isOpen = false"
      >Layanan</RouterLink>
      <RouterLink
        to="/contact"
        class="block py-2 lg:py-0 hover:text-blue-500"
        @click="isOpen = false"
      >Kontak</RouterLink>
      <RouterLink
        to="/login"
        class="block py-2 lg:py-0 hover:text-blue-500"
        @click="isOpen = false"
      >Masuk</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
