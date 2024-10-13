<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

// Supongamos que tienes una función o array donde buscar los detalles del post por ID
const post = {
  id: route.params.id,
  title: "Example Post Title",
  description: "This is an example of a detailed view of a post.",
  image: "https://via.placeholder.com/800",
  creator: "John Doe",
  content: "Here you can write more detailed content about the post.",
};
</script>

<template>
  <div
    class="max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      :src="post.image"
      alt="Post image"
      class="mb-4 w-full h-96 object-cover rounded-lg"
    />
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {{ post.title }}
    </h1>
    <p class="text-gray-500 dark:text-gray-400 mb-2">By {{ post.creator }}</p>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      {{ post.description }}
    </p>
    <div class="text-base text-gray-600 dark:text-gray-400">
      {{ post.content }}
      <!-- Contenido detallado -->
    </div>
  </div>
</template>

<style scoped></style>
