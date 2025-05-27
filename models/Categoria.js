import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Categoria = sequelize.define("Categoria", {
  idCategoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomeCategoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM("receita", "despesa"),
    allowNull: false,
  },
});

export default Categoria;
