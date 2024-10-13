<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800"
  >
    <div class="h-full px-3 py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            to="/admin-panel"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Panel de Administrador</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/blog"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Blog</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/user-panel"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Panel de Usuario</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/login"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Ingresar</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/register"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ms-3">Registrarse</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
/* Estilos adicionales para el sidebar si lo deseas */
</style>
