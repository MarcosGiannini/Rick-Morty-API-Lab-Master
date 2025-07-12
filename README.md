# Rick and Morty App - Laboratorio Cloud y Despliegues

Este repositorio contiene el proyecto final del Máster de Front-End, combinando la práctica de consumo de APIs (REST y GraphQL) con la práctica de Cloud y Despliegues (CI/CD, Docker, AWS).

## Despliegues Realizados

A continuación se listan los enlaces a los diferentes entornos donde la aplicación ha sido desplegada con éxito:

| Plataforma       | URL de Producción                                                                                                          | Método de Despliegue                    |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| **GitHub Pages** | [https://marcosgiannini.github.io/Rick-Morty-API-Lab-Master/](https://marcosgiannini.github.io/Rick-Morty-API-Lab-Master/) | CI/CD con GitHub Actions                |
| **Render**       | [https://rick-morty-docker.onrender.com](https://rick-morty-docker.onrender.com)                                           | Imagen de Docker desde Docker Hub       |
| **AWS**          | [http://13.50.235.133](http://13.50.235.133)                                                                               | Contenedor en ECS con Fargate desde ECR |

## Tecnologías y Conceptos Aplicados en Cloud

- **CI/CD:** Creación de un workflow con **GitHub Actions** para el despliegue automático.
- **Contenerización:** Creación de una imagen optimizada (multi-stage build) con **Docker** y un servidor **Nginx**.
- **Registro de Contenedores:** Publicación de imágenes en **Docker Hub** y **Amazon ECR**.
- **Despliegue en PaaS:** Despliegue en **Render** desde un repositorio de Git y desde una imagen de Docker.
- **Despliegue en Cloud (IaaS):** Despliegue de un contenedor en **Amazon ECS** con **AWS Fargate**, configurando Clúster, Definición de Tarea, Servicio, Rol de IAM y Grupos de Seguridad.

---

## Descripción de la Aplicación y Funcionalidades

Este proyecto implementa los ejercicios y challenges del laboratorio de API REST.

### Ejercicio 1 y Challenges (Modo API Pública)

Por defecto, la aplicación se ejecuta consumiendo la API pública de `rickandmortyapi.com`. En este modo, todas las funcionalidades de los challenges están activas:

- **Lista de Personajes, Lugares y Episodios** con paginación funcional.
- **Búsqueda** por nombre en la sección de Personajes.
- **Navegación** a la página de detalle de cada personaje.

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
    import { useCharacterCollectionGraphQL as useCharacterCollection } from "./character-collection.graphql.hook"; // Versión GraphQL
    ```

4.  El Hot-Reload de Vite debería actualizar la aplicación automáticamente para usar GraphQL.
