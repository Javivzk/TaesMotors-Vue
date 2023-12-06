import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modalStore', () => {

  const modal = ref(false)
  const modalData = ref({})

  function handleClickModal() {
    modal.value = !modal.value
  }


  return {
    modal,
    modalData,
    handleClickModal
  }
})