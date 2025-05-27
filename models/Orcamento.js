import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Orcamento = sequelize.define("Orcamento", {
  idOrcamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mes: DataTypes.STRING,
  ano: DataTypes.INTEGER,
  valorLimite: DataTypes.DECIMAL(10, 2),
});

export default Orcamento;
