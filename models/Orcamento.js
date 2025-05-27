const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

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

module.exports = Orcamento;
