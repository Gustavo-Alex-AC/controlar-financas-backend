import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import { registrarAuditoria } from "../utils/auditoriaLogger.js";

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
  idUtilizador: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default TransacaoFinanceira;

TransacaoFinanceira.afterCreate(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "CRIAR",
      tabela: "TransacaoFinanceira",
      dados: instancia.toJSON(),
    });
  }
});

TransacaoFinanceira.afterUpdate(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "ATUALIZAR",
      tabela: "TransacaoFinanceira",
      dados: instancia.toJSON(),
    });
  }
});

TransacaoFinanceira.afterDestroy(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "DELETAR",
      tabela: "TransacaoFinanceira",
      dados: instancia.toJSON(),
    });
  }
});
