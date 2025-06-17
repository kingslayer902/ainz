import { defineStore } from 'pinia'

export const useServiceStore = defineStore('service', {
  state: () => ({
    services: [
      {
        id: 1,
        title: 'Servis AC Rutin',
        description: 'Menjaga performa AC tetap optimal dengan servis rutin.',
        image: '/images/servis-ac.jpg'
      },
      {
        id: 2,
        title: 'Isi Freon',
        description: 'Mengisi ulang freon untuk memastikan udara tetap dingin.',
        image: '/images/isi-freon.jpg'
      },
      {
        id: 3,
        title: 'Pemasangan AC Baru',
        description: 'Instalasi AC profesional untuk rumah & kantor.',
        image: '/images/pasang-ac.jpg'
      },
      {
        id: 4,
        title: 'Perbaikan AC Rusak',
        description: 'Solusi cepat dan tepat untuk AC bermasalah.',
        image: '/images/perbaikan.jpg'
      },
      {
        id: 5,
        title: 'Cuci AC',
        description: 'Membersihkan filter dan evaporator agar udara lebih sehat.',
        image: '/images/cuci.jpg'
      },
      {
        id: 6,
        title: 'Konsultasi & Survey',
        description: 'Diskusikan kebutuhan Anda sebelum membeli atau servis AC.',
        image: '/images/survey.jpg'
      }
    ]
  })
})
