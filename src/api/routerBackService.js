import routeBackConfig from "./routeBackConfig";

export default class RouterBackService {
  axiosIns = null;
  jwtConfig = { ...routeBackConfig };

  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns;
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

    // Interceptor de solicitud
    this.axiosIns.interceptors.request.use(
      (config) => {
        const accessToken = this.getToken();
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Interceptor de respuesta
    this.axiosIns.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;

        if (response && response.status === 401) {
          window.localStorage.clear();
          window.location.href = "/login"; // Redirigir a login
        }

        return Promise.reject(error);
      }
    );
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
  }

  setToken(value) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
  }

  // Métodos para gestionar el login, logout, registro y posts

  // Login
  login(...args) {
    return this.axiosIns.post(this.jwtConfig.loginEndpoint, ...args);
  }

  // Logout
  logout(...args) {
    return this.axiosIns.post(this.jwtConfig.logoutEndpoint, ...args);
  }

  // Registro
  register(...args) {
    return this.axiosIns.post(this.jwtConfig.registerEndpoint, ...args);
  }

  // CRUD para Posts
  getPosts(...args) {
    return this.axiosIns.get(this.jwtConfig.postsEndpoint, ...args);
  }

  getPost(id, ...args) {
    return this.axiosIns.get(`${this.jwtConfig.postsEndpoint}/${id}`, ...args);
  }

  createPost(...args) {
    return this.axiosIns.post(this.jwtConfig.postsEndpoint, ...args, {
      headers: {
        Authorization: `Bearer ${this.getToken()}`, // Asumiendo que tienes un método para obtener el token
      },
    });
  }

  updatePost(id, ...args) {
    return this.axiosIns.put(`${this.jwtConfig.postsEndpoint}/${id}`, ...args, {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
  }

  deletePost(id, ...args) {
    return this.axiosIns.delete(`${this.jwtConfig.postsEndpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
      ...args,
    });
  }

  // Método para obtener el token
  getToken() {
    return localStorage.getItem("token"); // O de donde estés guardando el token
  }

  // Admin
  getAdminData(...args) {
    return this.axiosIns.get(this.jwtConfig.adminEndpoint, ...args);
  }
  getUserPost(userId, ...args) {
    return this.axiosIns.get(
      `${this.jwtConfig.userPostEndpoint}/users/${userId}`,
      ...args
    );
  }

  // Obtener todos los usuarios
  getUsers(...args) {
    return this.axiosIns.get(this.jwtConfig.usersEndpoint, ...args);
  }

  getUser(id, ...args) {
    return this.axiosIns.get(`${this.jwtConfig.usersEndpoint}/${id}`, ...args);
  }

  // Crear un nuevo usuario
  createUser(userData, ...args) {
    return this.axiosIns.post(this.jwtConfig.usersEndpoint, userData, ...args);
  }

  // Actualizar un usuario existente
  updateUser(userId, userData, ...args) {
    return this.axiosIns.put(
      `${this.jwtConfig.usersEndpoint}/${userId}`,
      userData,
      ...args
    );
  }

  // Eliminar un usuario
  deleteUser(userId, ...args) {
    return this.axiosIns.delete(
      `${this.jwtConfig.usersEndpoint}/${userId}`,
      ...args
    );
  }
}
