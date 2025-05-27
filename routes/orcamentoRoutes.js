import express from "express";
import OrcamentoController from "../controllers/orcamentoController.js";

const router = express.Router();

// Criar novo orçamento
router.post("/", OrcamentoController.create);

// Listar todos os orçamentos
router.get("/", OrcamentoController.findAll);

// Obter um orçamento pelo ID
router.get("/:id", OrcamentoController.findById);

// Atualizar um orçamento pelo ID
router.put("/:id", OrcamentoController.update);

// Excluir um orçamento pelo ID
router.delete("/:id", OrcamentoController.delete);

export default router;
