<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 flex flex-col"
  >
    <div class="flex-grow px-3 py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li v-if="userRole === 'admin'">
          <router-link
            to="/admin-panel"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Panel de Administrador</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Blog</span>
          </router-link>
        </li>
        <li v-if="userRole === 'admin' || userRole === 'user'">
          <router-link
            to="/user-panel"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Panel de Usuario</span>
          </router-link>
        </li>
        <!-- Muestra los enlaces de Ingresar y Registrarse solo si no están logueados -->
        <li v-if="!isLoggedIn">
          <router-link
            to="/login"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Ingresar</span>
          </router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link
            to="/register"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Registrarse</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <UserStatus />
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import UserStatus from "./UserStatus.vue";
const userRole = ref(localStorage.getItem("userRole"));

const isLoggedIn = ref(false);

onMounted(() => {
  const token = localStorage.getItem("token");
  isLoggedIn.value = !!token;
});
</script>

<style scoped>
/* Estilos adicionales para el sidebar si lo deseas */
</style>
