import express from "express";
import CategoriaController from "../controllers/categoriaController.js"; // Importa o controlador de categoria
import autenticarToken from "../middleware/authMiddleware.js"; // Importa o middleware de autenticação, se necessário
const router = express.Router();

router.post("/", autenticarToken, CategoriaController.create);
router.get("/", autenticarToken, CategoriaController.findAll);
router.get("/:id", autenticarToken, CategoriaController.findById);
router.put("/:id", autenticarToken, CategoriaController.update);
router.delete("/:id", autenticarToken, CategoriaController.delete);

export default router;
