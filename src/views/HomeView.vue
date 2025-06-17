
<template>
  <div>
    <HeroSection />
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 md:px-12">
        <SectionTitle title="Kenapa Memilih Nexac?" subtitle="Kami memberikan layanan berkualitas tinggi." />
        <div class="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Teknisi Berpengalaman" description="Tim kami bersertifikat dan profesional." />
          <FeatureCard title="Cepat & Efisien" description="Respon cepat & pengerjaan hemat waktu." />
          <FeatureCard title="Harga Transparan" description="Tanpa biaya tersembunyi. Jujur & terbuka." />
        </div>
      </div>
    </section>
    <section class="py-20">
      <div class="container mx-auto px-6 md:px-12">
        <SectionTitle title="Apa Kata Mereka?" subtitle="Testimoni pelanggan kami." />
        <div class="grid md:grid-cols-3 gap-6">
          <TestimonialCard testimonial="Pelayanannya cepat dan ramah!" name="Andi, Jakarta" />
          <TestimonialCard testimonial="AC saya dingin lagi, puas banget." name="Siti, Bandung" />
          <TestimonialCard testimonial="Harga terjangkau, teknisi profesional." name="Budi, Surabaya" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
</script>
