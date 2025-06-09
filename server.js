import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";
import "./models/index.js";

// importação das rotas
import userRoutes from "./routes/utilizadorRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import transacaoRoutes from "./routes/transaccaoRoutes.js";
import orcamentoRoutes from "./routes/orcamentoRoutes.js";
import auditoriaRoutes from "./routes/auditoriaRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:3000", // React frontend URL
    credentials: true, // If you're sending cookies or authentication headers
  })
);
app.use(express.json());

// Rotas
app.use("/api/utilizadores", userRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/transacoes", transacaoRoutes);
app.use("/api/orcamentos", orcamentoRoutes);
app.use("/api/auditorias", auditoriaRoutes);

// Sincronização com banco
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("📦 Banco de dados sincronizado com sucesso.");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao sincronizar banco de dados:", err);
  });
