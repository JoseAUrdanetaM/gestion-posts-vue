<template>
  <div class="max-w-7xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Panel de Administrador</h1>
    <div class="relative overflow-x-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Usuario</th>
            <th scope="col" class="px-6 py-3">Correo</th>
            <th scope="col" class="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ user.id }}
            </th>
            <td class="px-6 py-4">{{ user.name }}</td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">
              <button
                @click="openEditModal(user)"
                class="text-blue-600 hover:underline"
              >
                Modificar
              </button>
              <button
                @click="deleteUser(user.id)"
                class="text-red-600 hover:underline"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</div>

    <!-- Modal para editar usuario -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span @click="closeEditModal" class="close">&times;</span>
        <h2>Modificar Usuario</h2>
        <input v-model="editForm.name" placeholder="Nombre" />
        <input v-model="editForm.email" placeholder="Correo" />
        <!-- Puedes agregar un campo para rol si es necesario -->
        <button @click="updateUser">Guardar Cambios</button>
      </div>
    </div>
  </div>

  <Register />
</template>

<script setup>
import { ref, onMounted } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";
import axios from "axios";
import Register from "./Register.vue";

const users = ref([]);
const errorMessage = ref("");
const showModal = ref(false);
const editForm = ref({
  id: null,
  name: "",
  email: "",
});

const fetchUsers = () => {
  frontServiceConnect
    .getUsers()
    .then((response) => {
      users.value = response.data.data;
      console.log(users);
    })
    .catch((error) => {
      console.error("No se pudieron cargar los usuarios.", error);
    });
};

// Abrir modal con información del usuario
const openEditModal = (user) => {
  editForm.value = { ...user };
  showModal.value = true;
};

// Cerrar el modal
const closeEditModal = () => {
  showModal.value = false;
  errorMessage.value = ""; // Limpiar mensaje de error al cerrar el modal
};

const updateUser = async () => {
  if (!editForm.value.id) {
    console.error("No se puede modificar: ID del usuario es null o undefined");
    return;
  }
  const token = localStorage.getItem("token"); // Obtener el token almacenado
  try {
    await axios.put(
      `http://127.0.0.1:8000/api/admin/users/${editForm.value.id}`,
      editForm.value,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Incluir el token en los headers
        },
      }
    );
    fetchUsers(); // Refresca la lista de usuarios después de la modificación
    closeEditModal();
  } catch (error) {
    console.error("Error updating user:", error);
    errorMessage.value = "No se pudo modificar el usuario.";
  }
};

// Eliminar usuario
const deleteUser = async (userId) => {
  const token = localStorage.getItem("token"); // Obtener el token almacenado
  try {
    await axios.delete(`http://127.0.0.1:8000/api/admin/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Incluir el token en los headers
      },
    });
    fetchUsers(); // Refresca la lista de usuarios después de eliminar uno
  } catch (error) {
    console.error("Error deleting user:", error);
    errorMessage.value = "No se pudo eliminar el usuario.";
  }
};
onMounted(fetchUsers);
</script>

<style scoped>
/* Estilos adicionales si los necesitas */
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  padding: 8px;
  text-align: left;
}
</style>
