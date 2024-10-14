<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded p-4 w-96">
      <h3 class="font-bold">¿Estás seguro de que deseas eliminar este post?</h3>
      <div class="flex justify-between mt-4">
        <button @click="$emit('confirm')" class="text-red-500">
          Sí, eliminar
        </button>
        <button @click="$emit('cancel')" class="text-blue-500">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(["confirm", "cancel"]);
</script>

<style scoped>
/* Estilos para el diálogo de confirmación */
</style>
