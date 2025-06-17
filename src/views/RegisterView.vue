<template>
  <section class="p-8 max-w-sm mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">Daftar</h2>
    <form @submit.prevent="register" class="space-y-4">
      <input v-model="name" type="text" placeholder="Nama" class="w-full p-3 border rounded" required />
      <input v-model="email" type="email" placeholder="Email" class="w-full p-3 border rounded" required />
      <input v-model="password" type="password" placeholder="Password" class="w-full p-3 border rounded" required />
      <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full">
        Daftar
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const name = ref('')
const email = ref('')
const password = ref('')

function register() {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const exist = users.find(u => u.email === email.value)
  if (exist) return toast.error('Email sudah terdaftar')

  users.push({ name: name.value, email: email.value, password: password.value })
  localStorage.setItem('users', JSON.stringify(users))
  toast.success('Registrasi berhasil!')
}
</script>
