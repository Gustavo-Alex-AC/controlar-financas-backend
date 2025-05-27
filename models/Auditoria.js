import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Auditoria = sequelize.define("Auditoria", {
  idAuditoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  acao: DataTypes.STRING,
  dataHora: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Auditoria;
