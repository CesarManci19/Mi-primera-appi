# Mi primera API con Express.js

API RESTful básica desarrollada con Node.js y Express para gestionar tareas mediante operaciones CRUD.  
El proyecto almacena los datos en un archivo JavaScript externo y permite probar los endpoints con Postman.

## Descripción

Esta API permite crear, listar, actualizar y eliminar tareas.  
Cada tarea contiene los campos:

- id
- titulo
- descripcion
- completada

La aplicación fue creada como parte de una evaluación de programación backend, cumpliendo con los métodos HTTP GET, POST, PUT y DELETE, el uso de JSON y la documentación de pruebas en el README [file:1].

## Tecnologías utilizadas

- Node.js
- Express.js
- Postman

## Estructura del proyecto

```bash
.
├── data.js
├── index.js
├── routes.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el servidor, usa:

```bash
node index.js
```

Si tu proyecto tiene un script en `package.json`, también puedes usar:

```bash
npm start
```

El servidor se ejecutará en:

```bash
http://localhost:3000
```

## Endpoints disponibles

- `GET /tasks` → listar todas las tareas.
- `POST /tasks` → crear una nueva tarea.
- `PUT /tasks/:id` → actualizar una tarea existente.
- `DELETE /tasks/:id` → eliminar una tarea existente.

## Ejemplos de uso

### GET /tasks

Devuelve todas las tareas registradas.

### POST /tasks

Crea una nueva tarea enviando un JSON con los campos requeridos.

### PUT /tasks/:id

Actualiza una tarea existente usando su `id`.

### DELETE /tasks/:id

Elimina una tarea existente usando su `id`.

## Pruebas con Postman

A continuación se muestran las pruebas realizadas con Postman para verificar el funcionamiento de la API RESTful. Cada endpoint responde con JSON y permite ejecutar las operaciones CRUD solicitadas en la evaluación [file:1].

### 1. GET /tasks

**Descripción:** Lista todas las tareas registradas.

**Petición en Postman:**
- Método: `GET`
- URL: `http://localhost:3000/tasks`

**Captura:**
![GET /tasks](img/get-tasks.jpg)

### 2. POST /tasks

**Descripción:** Crea una nueva tarea.

**Petición en Postman:**
- Método: `POST`
- URL: `http://localhost:3000/tasks`
- Body: `raw` → `JSON`

```json
{
  "titulo": "Subir proyecto a GitHub",
  "descripcion": "Guardar el proyecto en el repositorio",
  "completada": false
}
```

**Captura:**
![POST /tasks](img/post-task.jpg)

### 3. PUT /tasks/:id

**Descripción:** Actualiza una tarea existente.

**Petición en Postman:**
- Método: `PUT`
- URL: `http://localhost:3000/tasks/1`
- Body: `raw` → `JSON`

```json
{
  "titulo": "Subir proyecto a GitHub",
  "descripcion": "Actualizar el proyecto en el repositorio",
  "completada": true
}
```

**Captura:**
![PUT /tasks/1](img/put-task.jpg)

### 4. DELETE /tasks/:id

**Descripción:** Elimina una tarea existente.

**Petición en Postman:**
- Método: `DELETE`
- URL: `http://localhost:3000/tasks/1`

**Captura:**
![DELETE /tasks/1](img/delete-task.jpg)

## Flujo de la aplicación

La aplicación funciona de forma sencilla y secuencial. Primero, el servidor Express se inicia desde `index.js` y carga las rutas definidas en `routes.js`. Luego, las tareas se almacenan y manipulan desde el archivo `data.js` sin necesidad de base de datos [file:1].

El flujo de uso es el siguiente:

1. El usuario realiza una petición GET para listar todas las tareas.
2. Si desea agregar una nueva tarea, envía una petición POST con los datos requeridos.
3. Para modificar una tarea existente, usa PUT con el `id` correspondiente.
4. Para eliminar una tarea, usa DELETE con el `id` correspondiente.
5. Finalmente, puede volver a hacer un GET para verificar los cambios realizados [file:1].

Las pruebas se documentan con capturas de Postman en el README para mostrar el funcionamiento real de cada endpoint [file:1].

## Conclusión

Este proyecto permitió aplicar los conceptos básicos de desarrollo backend con Node.js y Express, trabajando con rutas, métodos HTTP, respuestas en formato JSON y validaciones simples. También ayudó a comprender cómo documentar una API de forma clara en un README y cómo probarla con Postman [file:1][web:163].

En conjunto, la práctica demuestra el ciclo completo de una API CRUD básica: crear, leer, actualizar y eliminar datos de forma ordenada y entendible. Además, deja una base lista para futuras mejoras, como agregar persistencia con base de datos o validaciones más completas [web:164][web:166].
