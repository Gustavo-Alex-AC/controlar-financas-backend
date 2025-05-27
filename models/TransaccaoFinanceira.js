const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TransacaoFinanceira = sequelize.define("TransacaoFinanceira", {
  idTransacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: DataTypes.DATEONLY,
  valor: DataTypes.DECIMAL(10, 2),
  descricao: DataTypes.STRING,
  tipo: {
    type: DataTypes.ENUM("receita", "despesa"),
    allowNull: false,
  },
});

module.exports = TransacaoFinanceira;
