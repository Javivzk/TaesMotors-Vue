
<script setup>
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import { useModalStore } from '../stores/modal'; 
    import { useCochesStore } from '../stores/coches';

    const modal = useModalStore()
    const coches = useCochesStore()

</script>

<template>
    <TransitionRoot as="template" :show="modal.modal" >
      <Dialog as="div" class="relative z-10" @close="modal.handleClickModal()">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                <div>
                  <div class="mt-3">
                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                      {{ coches.coche.model }}  
                    </DialogTitle>
                    <img
                      :src="coches.coche.image"
                    />

                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                      Especificaciones del coche
                    </DialogTitle>

                    <p class="text-lg text-gray-500">Año: {{coches.coche.year}} </p>
                    <p class="text-lg text-gray-500">Cilindrada: {{coches.coche.motor}} </p>
                    <p class="text-lg text-gray-500">Combustible: {{coches.coche.fuel}} </p>
                    <p class="text-lg text-gray-500">Color: {{coches.coche.color}} </p>
                    <p class="text-lg text-gray-500">Disponibilidad: {{coches.coche.stock}} </p>
                  


                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                      Precio del coche
                    </DialogTitle>

                    <p class="text-lg text-gray-500">Precio base: {{coches.coche.basePrice}}€</p>
                    <p class="text-lg text-gray-500">IVA: {{coches.coche.basePrice * 0.21}}€</p>
                    <p class="text-lg text-gray-500">Precio final: {{coches.coche.basePrice * 1.21}}€</p>
                    <p class="text-lg text-gray-500">*Precio calculado sin ningun extra</p>



                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                    <button
                        type="button"
                        class="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white text-lg"
                        shadow hover:bg-gray-500
                        @click="modal.handleClickModal()"
                    >
                    Cerrar
                    </button>
                </div> 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>
  