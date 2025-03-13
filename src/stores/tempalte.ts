import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { templates } from '@/template'

export const useTemplateStore = defineStore('template', () => {
  const templateId = ref('template1')
  return { templateId }
})
