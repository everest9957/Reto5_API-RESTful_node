const express = require("express");

const app = express();
const PORT = 3000;

// Middleware para recibir JSON
app.use(express.json());

// ========================================
// DATOS EN MEMORIA
// ========================================

let usuarios = [
    {
        id: 1,
        nombre: "Ana García",
        email: "ana.garcia@example.com",
        edad: 28
    },
    {
        id: 2,
        nombre: "Carlos López",
        email: "carlos.lopez@example.com",
        edad: 34
    },
    {
        id: 3,
        nombre: "María Fernández",
        email: "maria.fernandez@example.com",
        edad: 25
    }
];

// ========================================
// RUTA PRINCIPAL
// ========================================

app.get("/", (req, res) => {
    res.json({
        mensaje: "API RESTful Reto 5 funcionando correctamente"
    });
});

// ========================================
// GET /usuarios
// Obtener todos los usuarios
// ========================================

app.get("/usuarios", (req, res) => {
    res.status(200).json(usuarios);
});

// ========================================
// GET /usuarios/:id
// Obtener un usuario por ID
// ========================================

app.get("/usuarios/:id", (req, res) => {

    const id = Number(req.params.id);

    const usuario = usuarios.find((usuario) => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        });
    }

    res.status(200).json(usuario);
});

// ========================================
// POST /usuarios
// Crear un nuevo usuario
// ========================================

app.post("/usuarios", (req, res) => {

    const { nombre, email, edad } = req.body;

    if (!nombre || !email || edad === undefined) {
        return res.status(400).json({
            error: "Los campos nombre, email y edad son obligatorios"
        });
    }

    const nuevoUsuario = {
        id: usuarios.length > 0
            ? Math.max(...usuarios.map((usuario) => usuario.id)) + 1
            : 1,

        nombre: nombre,
        email: email,
        edad: Number(edad)
    };

    usuarios.push(nuevoUsuario);

    res.status(201).json(nuevoUsuario);
});

// ========================================
// PUT /usuarios/:id
// Actualizar un usuario
// ========================================

app.put("/usuarios/:id", (req, res) => {

    const id = Number(req.params.id);

    const indice = usuarios.findIndex((usuario) => usuario.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        });
    }

    const { nombre, email, edad } = req.body;

    if (!nombre || !email || edad === undefined) {
        return res.status(400).json({
            error: "Los campos nombre, email y edad son obligatorios"
        });
    }

    usuarios[indice] = {
        id: id,
        nombre: nombre,
        email: email,
        edad: Number(edad)
    };

    res.status(200).json(usuarios[indice]);
});

// ========================================
// DELETE /usuarios/:id
// Eliminar un usuario
// ========================================

app.delete("/usuarios/:id", (req, res) => {

    const id = Number(req.params.id);

    const indice = usuarios.findIndex((usuario) => usuario.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Usuario no encontrado"
        });
    }

    const usuarioEliminado = usuarios.splice(indice, 1);

    res.status(200).json({
        mensaje: "Usuario eliminado correctamente",
        usuario: usuarioEliminado[0]
    });
});

// ========================================
// RUTA NO ENCONTRADA
// ========================================

app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    });
});

// ========================================
// INICIAR SERVIDOR
// ========================================

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});