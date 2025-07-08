---

## Estructura del Proyecto y Funcionalidades

Este proyecto implementa los ejercicios y challenges del laboratorio de API REST del Máster de Front-End.

### Ejercicio 1 y Challenges (Modo API Pública)

Por defecto, la aplicación se ejecuta consumiendo la API pública de `rickandmortyapi.com`. En este modo, todas las funcionalidades de los challenges están activas:

-   **Lista de Personajes, Lugares y Episodios** con paginación funcional.
-   **Búsqueda** por nombre en la sección de Personajes.
-   **Navegación** a la página de detalle de cada personaje.

### Ejercicio 2 (Modo Servidor Local)

Para probar la funcionalidad de **edición y guardado (PUT)**, la aplicación debe apuntar a un servidor local.

**Para activar este modo:**
1.  Abre el archivo `.env` en la raíz del proyecto.
2.  Cambia la variable a `VITE_USE_LOCAL_API=true`.
3.  Reinicia el servidor de Vite (`Ctrl + C` y `npm start`).

### Opcional: Implementación con GraphQL

La aplicación también contiene una implementación de la lista de personajes utilizando **GraphQL** en lugar de REST.

**Para activar este modo:**
1.  Abre el archivo `src/pods/character-collection/character-collection.container.tsx`.
2.  Comenta la línea de importación del hook de REST.
3.  Descomenta la línea de importación del hook de GraphQL, de la siguiente manera:

    ```javascript
    // import { useCharacterCollection } from './character-collection.hook'; // Versión REST
    import { useCharacterCollectionGraphQL as useCharacterCollection } from './character-collection.graphql.hook'; // Versión GraphQL
    ```
4. El Hot-Reload de Vite debería actualizar la aplicación automáticamente para usar GraphQL.