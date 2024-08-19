# api-Music


## Descripción
Este proyecto es una API RESTful construida con Node.js y Express que interactúa con una base de datos PostgreSQL. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una tabla de artistas y canciones.

## uso del proyecto

Sigue estos pasos para instalar y depurar la API:

1. Clona el repositorio:
    ```bash
    git clone (repositorio)
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto
    ```
3. corre el proyecto:
    ```bash
    npm run start
    ```



## Estructura del Proyecto
```plaintext
├── assets
├── src
│   ├── common
│   │   └── base.sql
│   ├── controllers
│   │   └── artistsController.js
│   │   └── SongsController.js
│   ├── models
│   │   └── artists.js
│   │   └── songs.js
│   ├── routes
│   │   └── artistsRoutes.js
│   │   └── songsRoutes.js
│   ├── config
│   │   └── database.js
│   └── app.js
│   └── index.js
├── .env
├── package.json
└── README.md





