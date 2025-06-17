<template>
  <nav class="bg-white shadow px-4 py-3 flex justify-between items-center">
    <div class="text-2xl font-bold text-blue-600 flex items-center gap-2">
      ❄️ <span>Nexac</span>
    </div>
    <div class="space-x-4">
      <RouterLink to="/" class="hover:text-blue-500">Home</RouterLink>
      <RouterLink to="/about" class="hover:text-blue-500">Tentang</RouterLink>
      <RouterLink to="/services" class="hover:text-blue-500">Layanan</RouterLink>
      <RouterLink to="/contact" class="hover:text-blue-500">Kontak</RouterLink>
      <RouterLink to="/login" class="hover:text-blue-500">Masuk</RouterLink>
    </div>
  </nav>
</template>
