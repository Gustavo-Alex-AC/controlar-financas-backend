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
  idUtilizador: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Orcamento;

Orcamento.afterCreate(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "CRIAR",
      tabela: "Orcamento",
      dados: instancia.toJSON(),
    });
  }
});

Orcamento.afterUpdate(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "ATUALIZAR",
      tabela: "Orcamento",
      dados: instancia.toJSON(),
    });
  }
});

Orcamento.afterDestroy(async (instancia, options) => {
  if (options.userId) {
    await registrarAuditoria({
      userId: options.userId,
      acao: "DELETAR",
      tabela: "Orcamento",
      dados: instancia.toJSON(),
    });
  }
});
