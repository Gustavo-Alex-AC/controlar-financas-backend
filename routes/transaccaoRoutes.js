import express from "express";
import TransacaoController from "../controllers/transaccaoController.js"; // Import
const router = express.Router();

router.post("/", TransacaoController.create);
router.get("/", TransacaoController.findAll);
router.get("/:id", TransacaoController.findById);
router.put("/:id", TransacaoController.update);
router.delete("/:id", TransacaoController.delete);

export default router;
