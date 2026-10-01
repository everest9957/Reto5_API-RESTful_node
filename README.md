# Reto 5 — API RESTful con Node.js

API RESTful básica desarrollada con **Node.js** y **Express** como parte del Reto 5 del curso de Desarrollo Web con Frameworks.

El proyecto implementa las operaciones CRUD sobre una colección de usuarios almacenada en memoria.

---

<h1 align="center">🚀 Reto 5 — API RESTful con Node.js</h1>

<p align="center">
  <strong>CRUD API desarrollada con Node.js + Express</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v22.23.3-339933?logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-5.2.1-000000?logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/API-REST-009688"/>
  <img src="https://img.shields.io/badge/Testing-Postman-FF6C37?logo=postman&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-Educational-blue"/>
</p>

---

<p align="center">
  API RESTful para gestión de usuarios mediante operaciones CRUD.
</p>

## 📋 Descripción

El objetivo del proyecto es desarrollar una API RESTful capaz de gestionar usuarios mediante diferentes métodos HTTP:

- **GET** — consultar usuarios.
- **POST** — crear usuarios.
- **PUT** — actualizar usuarios.
- **DELETE** — eliminar usuarios.

Los datos se almacenan temporalmente en un array de JavaScript, por lo que se pierden cuando se reinicia el servidor.

---

## 🛠️ Tecnologías utilizadas

<p align="center">

<a href="https://nodejs.org/" target="_blank">
  <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" width="65" height="65"/>
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://expressjs.com/" target="_blank">
  <img src="https://cdn.simpleicons.org/express/000000" alt="Express" width="65" height="65"/>
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank">
  <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" width="65" height="65"/>
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://www.json.org/" target="_blank">
  <img src="https://cdn.simpleicons.org/json/000000" alt="JSON" width="65" height="65"/>
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://www.postman.com/" target="_blank">
  <img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" width="65" height="65"/>
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://git-scm.com/" target="_blank">
  <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" width="65" height="65"/>
</a>
&nbsp;&nbsp;&nbsp;

<a href="https://github.com/" target="_blank">
  <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" width="65" height="65"/>
</a>

</p>

<p align="center">
  <strong>Node.js</strong> ·
  <strong>Express</strong> ·
  <strong>JavaScript</strong> ·
  <strong>JSON</strong> ·
  <strong>Postman</strong> ·
  <strong>Git</strong> ·
  <strong>GitHub</strong>
</p>

<p align="center">

<img src="https://img.shields.io/badge/Node.js-v22.23.3-339933?logo=nodedotjs&logoColor=white" alt="Node.js version"/>
<img src="https://img.shields.io/badge/npm-10.9.9-CB3837?logo=npm&logoColor=white" alt="npm version"/>
<img src="https://img.shields.io/badge/Express-5.2.1-000000?logo=express&logoColor=white" alt="Express version"/>
<img src="https://img.shields.io/badge/Postman-API%20Testing-FF6C37?logo=postman&logoColor=white" alt="Postman"/>
<img src="https://img.shields.io/badge/REST-API-009688?logo=fastapi&logoColor=white" alt="REST API"/>

</p>
---

## 📁 Estructura del proyecto

```text
Reto5_API RESTful_node
│
├── docs
│   ├── capturas
│   │   ├── 01_GET_usuarios.png
│   │   ├── 02_GET_usuario_id.png
│   │   ├── 03_GET_usuario_404.png
│   │   ├── 04_POST_usuario.png
│   │   ├── 05_GET_usuarios_con_nuevo_usuario.png
│   │   ├── 06_GET_usuario_por_id.png
│   │   ├── 07_PUT_usuario.png
│   │   ├── 08_GET_usuario_actualizado.png
│   │   ├── 09_DELETE_usuario.png
│   │   └── 10_GET_usuario_eliminado_404.png
│   │
│   ├── API.md
│   └── PRUEBAS.md
│
├── src
│   └── server.js
│
├── tests
│
├── .gitignore
├── package.json
├── package-lock.json
├── postman_collection.json
└── README.md
```

---

## ⚙️ Requisitos

Para ejecutar el proyecto es necesario tener instalado:

- Node.js
- npm

Se recomienda utilizar una versión reciente de Node.js.

---

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar en la carpeta del proyecto:

```bash
cd "Reto5_API RESTful_node"
```

Instalar las dependencias:

```bash
npm install
```

---

## ▶️ Ejecución

Iniciar el servidor mediante:

```bash
node .\src\server.js
```

El servidor estará disponible en:

```text
http://localhost:3000
```

Al iniciar correctamente aparecerá:

```text
Servidor ejecutándose en http://localhost:3000
```

---

# 🔌 Endpoints

## Comprobar la API

```text
GET /
```

Respuesta:

```json
{
  "mensaje": "API RESTful Reto 5 funcionando correctamente"
}
```

---

## Obtener todos los usuarios

```text
GET /usuarios
```

Ejemplo:

```text
http://localhost:3000/usuarios
```

---

## Obtener un usuario por ID

```text
GET /usuarios/:id
```

Ejemplo:

```text
http://localhost:3000/usuarios/2
```

---

## Crear un usuario

```text
POST /usuarios
```

Body JSON:

```json
{
  "nombre": "Judit Giravent",
  "email": "judit.giravent@example.com",
  "edad": 30
}
```

Respuesta correcta:

```text
201 Created
```

---

## Actualizar un usuario

```text
PUT /usuarios/:id
```

Ejemplo:

```text
http://localhost:3000/usuarios/4
```

Body JSON:

```json
{
  "nombre": "Judit Giravent Pineda",
  "email": "judit.giravent@example.com",
  "edad": 31
}
```

---

## Eliminar un usuario

```text
DELETE /usuarios/:id
```

Ejemplo:

```text
http://localhost:3000/usuarios/4
```

---

# 🧪 Pruebas con Postman

Las operaciones de la API se han probado mediante **Postman**.

Se han realizado pruebas para:

1. Obtener todos los usuarios.
2. Obtener un usuario mediante ID.
3. Comprobar un usuario inexistente.
4. Crear un usuario.
5. Comprobar el usuario creado.
6. Obtener el usuario creado mediante ID.
7. Actualizar el usuario.
8. Comprobar los datos actualizados.
9. Eliminar el usuario.
10. Comprobar que el usuario eliminado ya no existe.

La documentación completa de las pruebas está disponible en:

**[docs/PRUEBAS.md](docs/PRUEBAS.md)**

La documentación de los endpoints está disponible en:

**[docs/API.md](docs/API.md)**

---

# 📸 Evidencias visuales de las pruebas

Las operaciones CRUD de la API fueron verificadas mediante **Postman**.
A continuación se muestran las evidencias visuales de cada comprobación realizada.

> 💡 Pulsa sobre cualquier captura para consultar la imagen a tamaño completo.

<table>
  <tr>
    <td align="center">
      <strong>01 · GET /usuarios</strong><br>
      <a href="docs/capturas/01_GET_usuarios.png">
        <img src="docs/capturas/01_GET_usuarios.png" alt="GET usuarios" width="420">
      </a>
    </td>
    <td align="center">
      <strong>02 · GET /usuarios/2</strong><br>
      <a href="docs/capturas/02_GET_usuario_id.png">
        <img src="docs/capturas/02_GET_usuario_id.png" alt="GET usuario por ID" width="420">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>03 · GET /usuarios/999 · 404</strong><br>
      <a href="docs/capturas/03_GET_usuario_404.png">
        <img src="docs/capturas/03_GET_usuario_404.png" alt="GET usuario no encontrado" width="420">
      </a>
    </td>
    <td align="center">
      <strong>04 · POST /usuarios · 201</strong><br>
      <a href="docs/capturas/04_POST_usuario.png">
        <img src="docs/capturas/04_POST_usuario.png" alt="POST crear usuario" width="420">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>05 · GET /usuarios · usuario creado</strong><br>
      <a href="docs/capturas/05_GET_usuarios_con_nuevo_usuario.png">
        <img src="docs/capturas/05_GET_usuarios_con_nuevo_usuario.png" alt="GET usuarios con nuevo usuario" width="420">
      </a>
    </td>
    <td align="center">
      <strong>06 · GET /usuarios/4</strong><br>
      <a href="docs/capturas/06_GET_usuario_por_id.png">
        <img src="docs/capturas/06_GET_usuario_por_id.png" alt="GET usuario creado por ID" width="420">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>07 · PUT /usuarios/4</strong><br>
      <a href="docs/capturas/07_PUT_usuario.png">
        <img src="docs/capturas/07_PUT_usuario.png" alt="PUT actualizar usuario" width="420">
      </a>
    </td>
    <td align="center">
      <strong>08 · GET /usuarios/4 · actualizado</strong><br>
      <a href="docs/capturas/08_GET_usuario_actualizado.png">
        <img src="docs/capturas/08_GET_usuario_actualizado.png" alt="GET usuario actualizado" width="420">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>09 · DELETE /usuarios/4</strong><br>
      <a href="docs/capturas/09_DELETE_usuario.png">
        <img src="docs/capturas/09_DELETE_usuario.png" alt="DELETE usuario" width="420">
      </a>
    </td>
    <td align="center">
      <strong>10 · GET /usuarios/4 · 404</strong><br>
      <a href="docs/capturas/10_GET_usuario_eliminado_404.png">
        <img src="docs/capturas/10_GET_usuario_eliminado_404.png" alt="GET usuario eliminado" width="420">
      </a>
    </td>
  </tr>
</table>

### 📚 Documentación completa

- 📖 **[Documentación de la API](docs/API.md)** — endpoints, parámetros y respuestas.
- 🧪 **[Pruebas completas](docs/PRUEBAS.md)** — detalle de las 10 pruebas realizadas.
- 📸 **[Carpeta de capturas](docs/capturas/)** — evidencias originales de Postman.

---

# 📦 Colección de Postman

El proyecto incluye una colección de Postman:

```text
postman_collection.json
```

Esta colección permite importar las peticiones utilizadas para probar la API.

---

# 📚 Reto realizado

Este proyecto corresponde al **Reto 5 — Crear una API RESTful con Node.js**.

El ejercicio contempla la creación de una API básica con Node.js, la implementación de operaciones CRUD, la realización de pruebas mediante Postman o Insomnia y la documentación de las rutas y resultados.

---

# 👩‍💻 Proyecto

**Reto 5 — API RESTful con Node.js**

Tecnologías principales:

```text
Node.js + Express + JavaScript + REST API + Postman
```