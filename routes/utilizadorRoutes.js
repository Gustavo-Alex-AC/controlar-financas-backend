import express from "express";
import UserController from "../controllers/utilizadorController.js";
import autenticarToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.post("/signup", UserController.create); // Sign up
router.post("/login", UserController.login); // Login

// Routas protegidas
router.get("/", autenticarToken, UserController.findAll);
router.get("/:id", autenticarToken, UserController.findById);
router.put("/:id", autenticarToken, UserController.update);
router.delete("/:id", autenticarToken, UserController.delete);

export default router;
