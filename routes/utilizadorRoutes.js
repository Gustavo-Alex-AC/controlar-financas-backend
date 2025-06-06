import express from "express";
import UserController from "../controllers/utilizadorController.js";

const router = express.Router();

router.post("/", UserController.create);
router.get("/", UserController.findAll);
router.get("/:id", UserController.findById);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
