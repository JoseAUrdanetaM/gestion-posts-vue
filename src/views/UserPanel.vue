<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Panel de Usuario</h1>

    <!-- Formulario de actualización de usuario -->
    <form @submit.prevent="updateUser" class="mb-6">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium">Nombre</label>
        <input
          v-model="userForm.name"
          type="text"
          id="name"
          required
          class="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          v-model="userForm.email"
          type="email"
          id="email"
          required
          class="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium"
          >Contraseña</label
        >
        <input
          v-model="userForm.password"
          type="password"
          id="password"
          class="mt-1 p-2 border rounded w-full"
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Actualizar
      </button>
    </form>

    <!-- Sección de posts del usuario -->
    <h2 class="text-xl font-bold mb-2">Mis Posts</h2>
    <div v-if="userPosts.length === 0">No tienes posts.</div>
    <ul class="list-disc ml-6">
      <li v-for="post in userPosts" :key="post.id">
        <a :href="`/blog/${post.id}`" class="text-blue-600 hover:underline">{{
          post.title
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";
</script>

<style scoped>
/* Estilos personalizados */
</style>
