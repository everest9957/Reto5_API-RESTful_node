# Documentación de la API RESTful

## 1. Descripción

API RESTful desarrollada con Node.js y Express como parte del Reto 5.

La API permite realizar operaciones CRUD sobre una colección de usuarios almacenada en memoria mediante un array de JavaScript.

## 2. URL base

```text
http://localhost:3000

3. Modelo de datos
Cada usuario tiene la siguiente estructura:
{
  "id": 1,
  "nombre": "Ana García",
  "email": "ana.garcia@example.com",
  "edad": 28
}

Campos
Campo	Tipo	Descripción
id	Number	Identificador único del usuario
nombre	String	Nombre completo del usuario
email	String	Dirección de correo electrónico
edad	Number	Edad del usuario


4. Endpoints
GET /
Descripción
Comprueba que la API está funcionando correctamente.
Respuesta
HTTP 200 OK
{
  "mensaje": "API RESTful Reto 5 funcionando correctamente"
}

GET /usuarios
Descripción
Obtiene todos los usuarios registrados.
Método HTTP
GET

URL
http://localhost:3000/usuarios

Respuesta correcta
HTTP 200 OK
Ejemplo:
[
  {
    "id": 1,
    "nombre": "Ana García",
    "email": "ana.garcia@example.com",
    "edad": 28
  },
  {
    "id": 2,
    "nombre": "Carlos López",
    "email": "carlos.lopez@example.com",
    "edad": 34
  }
]

GET /usuarios/:id
Descripción
Obtiene un usuario concreto mediante su identificador.
Método HTTP
GET

Parámetro
Parámetro	Tipo	Descripción
id	Number	Identificador del usuario


Ejemplo
GET http://localhost:3000/usuarios/2

Respuesta correcta
HTTP 200 OK
{
  "id": 2,
  "nombre": "Carlos López",
  "email": "carlos.lopez@example.com",
  "edad": 34
}

Usuario no encontrado
HTTP 404 Not Found
{
  "error": "Usuario no encontrado"
}

POST /usuarios
Descripción
Crea un nuevo usuario.
Método HTTP
POST

URL
http://localhost:3000/usuarios

Body
El cuerpo de la petición debe utilizar formato JSON.
Ejemplo:
{
  "nombre": "Judit Giravent",
  "email": "judit.giravent@example.com",
  "edad": 30
}

Respuesta correcta
HTTP 201 Created
{
  "id": 4,
  "nombre": "Judit Giravent",
  "email": "judit.giravent@example.com",
  "edad": 30
}

Campos obligatorios
Los campos siguientes son obligatorios:
- nombre
- email
- edad
Si falta alguno:
HTTP 400 Bad Request
{
  "error": "Los campos nombre, email y edad son obligatorios"
}

PUT /usuarios/:id
Descripción
Actualiza los datos de un usuario existente.
Método HTTP
PUT

Parámetro
Parámetro	Tipo	Descripción
id	Number	Identificador del usuario


Ejemplo
PUT http://localhost:3000/usuarios/4

Body
{
  "nombre": "Judit Giravent Pineda",
  "email": "judit.giravent@example.com",
  "edad": 31
}

Respuesta correcta
HTTP 200 OK
{
  "id": 4,
  "nombre": "Judit Giravent Pineda",
  "email": "judit.giravent@example.com",
  "edad": 31
}

Usuario no encontrado
HTTP 404 Not Found
{
  "error": "Usuario no encontrado"
}

DELETE /usuarios/:id
Descripción
Elimina un usuario mediante su identificador.
Método HTTP
DELETE

Parámetro
Parámetro	Tipo	Descripción
id	Number	Identificador del usuario


Ejemplo
DELETE http://localhost:3000/usuarios/4

Respuesta correcta
HTTP 200 OK
{
  "mensaje": "Usuario eliminado correctamente",
  "usuario": {
    "id": 4,
    "nombre": "Judit Giravent Pineda",
    "email": "judit.giravent@example.com",
    "edad": 31
  }
}

Usuario no encontrado
HTTP 404 Not Found
{
  "error": "Usuario no encontrado"
}

5. Resumen de endpoints
Método	Endpoint	Función	Respuesta principal
GET	/	Comprobar funcionamiento	200
GET	/usuarios	Obtener todos los usuarios	200
GET	/usuarios/:id	Obtener un usuario	200 / 404
POST	/usuarios	Crear usuario	201 / 400
PUT	/usuarios/:id	Actualizar usuario	200 / 400 / 404
DELETE	/usuarios/:id	Eliminar usuario	200 / 404


6. Almacenamiento de datos
Para este ejercicio los usuarios se almacenan en un array de JavaScript en memoria.
Esto permite implementar las operaciones CRUD sin utilizar una base de datos.
Los datos se pierden al detener o reiniciar el servidor.
7. Tecnologías utilizadas
- Node.js
- Express
- JavaScript
- JSON
- Postman
- Git / GitHub



