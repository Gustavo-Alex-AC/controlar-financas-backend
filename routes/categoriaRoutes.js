import express from "express";
import CategoriaController from "../controllers/categoriaController.js"; // Importa o controlador de categoria
const router = express.Router();

router.post("/", CategoriaController.create);
router.get("/", CategoriaController.findAll);
router.get("/:id", CategoriaController.findById);
router.put("/:id", CategoriaController.update);
router.delete("/:id", CategoriaController.delete);

export default router;
