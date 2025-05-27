const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Utilizador = sequelize.define("Utilizador", {
  idUtilizador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomeUtilizador: DataTypes.STRING,
  emailUtilizador: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  senhaUtilizador: DataTypes.STRING,
  nivelAcesso: {
    type: DataTypes.STRING,
    defaultValue: "utilizador"
  }
});

module.exports = Utilizador;
