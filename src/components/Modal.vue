<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded p-4 w-96">
      <slot name="header" />
      <slot name="body" :newPost="newPost" />
      <button
        type="button"
        @click="$emit('close')"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm w-full py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Cancelar
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

// Asegúrate de que el componente pueda recibir props
defineEmits(["close"]);
defineProps({
  newPost: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Estilos para el modal */
</style>
