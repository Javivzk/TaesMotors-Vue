<template>
  <TransitionRoot as="template" :show="modal.modal">
    <Dialog as="div" class="relative z-10" @close="modal.handleClickModal()">
      <!-- Transiciones y fondo oscuro -->
      <!-- ... -->

      <!-- Contenido del Modal -->
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <!-- Transiciones del panel del modal -->
          <!-- ... -->

          <!-- Panel del Modal -->
          <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
            <div>
              <div class="mt-3">
                <!-- Título del Modal -->
                <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                  Detalles del Pedido
                </DialogTitle>

                <!-- Contenido del Modal -->
                <!-- Asegúrate de que estas propiedades existen en el objeto pedido -->
                <p class="text-lg text-gray-500">Cliente: {{ pedidos.pedido.customer.name }} {{ pedidos.pedido.customer.lastName }}</p>
                <p class="text-lg text-gray-500">Marca de Coche: {{ pedidos.pedido.car.brand }}</p>
                <p class="text-lg text-gray-500">Modelo de Coche: {{ pedidos.pedido.car.model }}</p>
                <!-- Más detalles del pedido aquí -->

                <!-- Botón de Cerrar -->
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
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useModalStore } from '../stores/modal'; 
import { usePedidosStore } from '../stores/pedidos';

const modal = useModalStore();
const pedidos = usePedidosStore();
</script>
