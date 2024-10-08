import { Router } from "express";
import { libro } from "./controller.js";

export const router = Router();

//ruta para llamar a todos los libros
router.get("/getAll", libro.getAll);

// Ruta para obtener un libro específico por ID
router.get("/getOne/:id", libro.getOne);

// Ruta para insetar un libro
router.post("/create", libro.create);

// Ruta para actualizar un libro
router.put("/update/:id", libro.update);

// Ruta para eliminar un libro por ISBN
router.delete("/delete/:ISBN", libro.delete);
