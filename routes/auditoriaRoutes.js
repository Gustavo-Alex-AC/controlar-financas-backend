import express from "express";
import AuditoriaController from "../controllers/auditoriaController.js";
import autenticarToken from "../middleware/authMiddleware.js"; // Importa o middleware de autenticação, se necessário
const router = express.Router();

// Criar nova auditoria
//router.post("/", AuditoriaController.create);

// Listar todas as auditorias
router.get("/", autenticarToken, AuditoriaController.findAll);

// Buscar auditoria por ID
//router.get("/:id", AuditoriaController.findById);

// Atualizar auditoria por ID
//router.put("/:id", AuditoriaController.update);

// Excluir auditoria por ID
//router.delete("/:id", AuditoriaController.delete);

export default router;
