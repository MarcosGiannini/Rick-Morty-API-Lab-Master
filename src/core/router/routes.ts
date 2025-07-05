// src/core/router/routes.ts

/**
 * @description Define las rutas principales de la aplicación.
 * Este archivo centraliza la configuración de todas las URLs
 * a las que puede navegar el usuario dentro de la aplicación.
 *
 * Las rutas se organizan en un objeto para facilitar su acceso
 * y evitar errores tipográficos al referenciarlas.
 */
export const appRoutes = {
  // Ruta para la página principal que mostrará la colección de personajes.
  // Se utiliza la URL raíz ('/') para que sea el punto de entrada principal.
  characterCollection: '/',

  // Ruta para el detalle de un personaje específico.
  // Se añade ':id' para indicar que esta ruta espera un parámetro de ID
  // en la URL, que se usará para cargar la información del personaje.
  character: '/character/:id',
};