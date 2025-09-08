import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const form = ref({
    name: '',
    email: '',
    message: ''
  })

  const isSubmitting = ref(false)

  const updateForm = (field: string, value: string) => {
    form.value[field as keyof typeof form.value] = value
  }

  const resetForm = () => {
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  }

  const submitForm = async () => {
    isSubmitting.value = true
    try {
      // Hier würde die echte API-Anfrage stehen
      console.log('Form submitted:', form.value)
      // Simuliere API-Call
      await new Promise(resolve => setTimeout(resolve, 1000))
      resetForm()
      return { success: true }
    } catch (error) {
      return { success: false, error }
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    isSubmitting,
    updateForm,
    resetForm,
    submitForm
  }
})
