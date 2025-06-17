<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6 md:px-12 max-w-2xl">
      <SectionTitle title="Hubungi Kami" subtitle="Ada pertanyaan? Kami siap membantu." />

      <!-- Kontak Langsung -->
      <div class="mb-8 space-y-4 text-sm text-gray-600">
        <p>📱 <strong>WhatsApp:</strong> <a href="https://wa.me/6281234567890" class="text-blue-600 hover:underline" target="_blank">+62 812-3456-7890</a></p>
        <p>✉️ <strong>Email:</strong> <a href="mailto:support@nexac.id" class="text-blue-600 hover:underline">support@nexac.id</a></p>
        <p>📍 <strong>Alamat:</strong> Jl. Sejuk No. 21, Jakarta Selatan</p>
        <p>🌐 <strong>Instagram:</strong> <a href="https://instagram.com/nexac.id" target="_blank" class="text-blue-600 hover:underline">@nexac.id</a></p>
      </div>

      <!-- Form Kontak -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <input type="text" v-model="name" placeholder="Nama" class="w-full border px-4 py-3 rounded" required />
        <input type="email" v-model="email" placeholder="Email" class="w-full border px-4 py-3 rounded" required />
        <textarea v-model="message" placeholder="Pesan" class="w-full border px-4 py-3 rounded h-32" required></textarea>
        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Kirim</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { toast } from 'vue3-toastify'

const name = ref('')
const email = ref('')
const message = ref('')

function handleSubmit() {
  toast.success("Pesan Anda berhasil dikirim!", { autoClose: 3000 })
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>
