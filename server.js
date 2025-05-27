const express = require("express");
const cors = require("cors");
const db = require("./models/Index");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Sincronizar com o banco
db.sequelize
  .sync({ alter: true })
  .then(() => console.log("Banco sincronizado"))
  .catch((err) => console.error("Erro ao sincronizar banco:", err));

// Rotas
require("./routes/auth.routes")(app);

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
