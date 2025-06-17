
<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-md mx-auto px-6">
      <h2 class="text-2xl font-bold mb-6 text-center">Masuk ke Nexac</h2>
      <form @submit.prevent="login" class="space-y-4">
        <input type="text" v-model="username" placeholder="Username" class="w-full border px-4 py-3 rounded" required />
        <input type="password" v-model="password" placeholder="Password" class="w-full border px-4 py-3 rounded" required />
        <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
          Masuk
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const username = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

function login() {
  if (username.value === 'admin' && password.value === '1234') {
    userStore.login({ username: username.value })
    toast.success("Berhasil masuk!", { autoClose: 2000 })
    router.push('/')
  } else {
    toast.error("Username atau password salah!", { autoClose: 2000 })
  }
}
</script>
