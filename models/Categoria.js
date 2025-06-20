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
   idUtilizador: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Categoria;

Categoria.afterCreate(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "CRIAR",
      tabela: "Categoria",
      dados: instancia.toJSON(),
    });
  }
});

Categoria.afterUpdate(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "ATUALIZAR",
      tabela: "Categoria",
      dados: instancia.toJSON(),
    });
  }
});

Categoria.afterDestroy(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "DELETAR",
      tabela: "Categoria",
      dados: instancia.toJSON(),
    });
  }
});
