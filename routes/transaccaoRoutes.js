import express from "express";
import TransacaoController from "../controllers/transaccaoController.js";
import autenticarToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", autenticarToken, TransacaoController.create);
router.get("/", autenticarToken, TransacaoController.findAll);
router.get("/:id", autenticarToken, TransacaoController.findById);
router.put("/:id", autenticarToken, TransacaoController.update);
router.delete("/:id", autenticarToken, TransacaoController.delete);

export default router;
