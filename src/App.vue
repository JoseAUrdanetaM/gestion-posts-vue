<template>
  <div class="flex">
    <Sidebar />
    <!-- Sidebar presente en toda la aplicación -->
    <div class="ml-64 p-6 flex-grow">
      <!-- Contenido principal -->
      <router-view />
      <!-- Aquí se renderiza el contenido de cada página -->
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../src/components/Sidebar.vue";
</script>

<style scoped>
.flex {
  display: flex;
}

.ml-64 {
  margin-left: 16rem; /* Espacio para el sidebar */
}

.flex-grow {
  flex-grow: 1; /* El contenido crece ocupando el espacio sobrante */
}

.p-6 {
  padding: 1.5rem;
}
</style>
