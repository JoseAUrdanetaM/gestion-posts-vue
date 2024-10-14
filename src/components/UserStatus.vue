<!-- src/components/UserStatus.vue -->
<template>
  <div v-if="isLoggedIn" class="p-4 bg-gray-200 rounded-lg">
    <p class="font-semibold">Hola, {{ userName }}!</p>
    <p class="text-sm">Rol: {{ userRole }}</p>
    <button @click="logout" class="mt-2 text-red-600 hover:underline">
      Cerrar sesión
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(!!localStorage.getItem("token"));
const userName = ref(localStorage.getItem("userName"));
const userRole = ref(localStorage.getItem("userRole"));

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.removeItem("userRole");
  router.push("/");
  location.reload(); // Recargar la página para reflejar los cambios
};
</script>

<style scoped>
/* Estilos opcionales para el estado del usuario */
</style>
