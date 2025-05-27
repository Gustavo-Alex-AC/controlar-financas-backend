import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Utilizador = sequelize.define("Utilizador", {
  idUtilizador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomeUtilizador: DataTypes.STRING,
  emailUtilizador: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  senhaUtilizador: DataTypes.STRING,
  nivelAcesso: {
    type: DataTypes.STRING,
    defaultValue: "utilizador",
  },
});

export default Utilizador;
