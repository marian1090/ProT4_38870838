import { pool } from "./database.js";

class LibrosController {
  //funcion para obtener los libros
  async getAll(req, res) {
    try {
      const [result] = await pool.query("SELECT * FROM libros");

      res.json(result);
    } catch (error) {
      console.error("Error al obtener los libros:", error.message);
      res.status(500).json({ error: "Error al obtener los libros" });
    }
  }

  // funcion para obtener un libro
  async getOne(req, res) {
    const { id } = req.params;

    try {
      const [rows] = await pool.query("SELECT * FROM libros WHERE id = ?", [
        id,
      ]);
      if (rows.length === 0) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }

      res.json(rows[0]);
    } catch (error) {
      console.error("Error al obtener el libro:", error.message);
      res.status(500).json({ error: "Error al obtener el libro" });
    }
  }

  // funcion para insertar libro
  async create(req, res) {
    const { nombre, autor, categoria, año_publicacion, ISBN } = req.body;

    console.log("Datos recibidos:", req.body);

    if (!nombre || !autor || !categoria || !año_publicacion || !ISBN) {
      return res.status(400).json({ error: "Todos los campos son necesarios" });
    }
    try {
      const [result] = await pool.query(
        "INSERT INTO libros (nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)",
        [nombre, autor, categoria, año_publicacion, ISBN]
      );

      const newBookId = result.insertId;

      res.status(201).json({
        id: newBookId,
        nombre,
        autor,
        categoria,
        año_publicacion,
        ISBN,
        message: "Libro creado exitosamente",
      });
    } catch (error) {
      console.error("Error al crear el libro:", error.message);

      res.status(500).json({ error: "Error al crear el libro" });
    }
  }
}

export const libro = new LibrosController();
