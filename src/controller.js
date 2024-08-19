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
}

export const libro = new LibrosController();
