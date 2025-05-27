const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

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

module.exports = Auditoria;
