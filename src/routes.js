import { Router } from "express";
import { libro } from "./controller.js";

export const router = Router();

//ruta para llamar a todos los libros
router.get("/getAll", libro.getAll);
