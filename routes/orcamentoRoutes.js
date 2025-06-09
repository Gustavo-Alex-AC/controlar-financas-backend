import express from "express";
import OrcamentoController from "../controllers/orcamentoController.js";
import autenticarToken from "../middleware/authMiddleware.js";
const router = express.Router();

// Criar novo orçamento
router.post("/", autenticarToken, OrcamentoController.create);

// Listar todos os orçamentos
router.get("/", autenticarToken, OrcamentoController.findAll);

// Obter um orçamento pelo ID
router.get("/:id", autenticarToken, OrcamentoController.findById);

// Atualizar um orçamento pelo ID
router.put("/:id", autenticarToken, OrcamentoController.update);

// Excluir um orçamento pelo ID
router.delete("/:id", autenticarToken, OrcamentoController.delete);

export default router;
