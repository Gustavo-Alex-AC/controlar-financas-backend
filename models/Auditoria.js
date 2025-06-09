import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Auditoria = sequelize.define("Auditoria", {
  idAuditoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUtilizador: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  acao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tabela: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dados: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  dataHora: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Auditoria;
