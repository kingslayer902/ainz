
<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12">
      <SectionTitle title="Layanan Kami" subtitle="Kami siap membantu berbagai kebutuhan AC Anda." />
      <div v-if="services.length" class="grid md:grid-cols-3 gap-6">
        <FeatureCard v-for="item in services" :key="item.id" :title="item.title" :description="item.description" />
      </div>
      <div v-else class="text-center text-gray-500">Memuat layanan...</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import FeatureCard from '@/components/FeatureCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

const services = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('https://nexac-api-production.up.railway.app/services')

    services.value = res.data
  } catch (err) {
    console.error(err)
  }
})
</script>
