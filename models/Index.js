const sequelize = require("../config/database");

const Utilizador = require("./Utilizador");
const OrcamentoMensal = require("./OrcamentoMensal");
const Categoria = require("./Categoria");
const TransacaoFinanceira = require("./TransacaoFinanceira");
const Auditoria = require("./Auditoria");

// Associações

Utilizador.hasMany(OrcamentoMensal, { foreignKey: "idUtilizador" });
OrcamentoMensal.belongsTo(Utilizador, { foreignKey: "idUtilizador" });

Utilizador.hasMany(TransacaoFinanceira, { foreignKey: "idUtilizador" });
TransacaoFinanceira.belongsTo(Utilizador, { foreignKey: "idUtilizador" });

Categoria.hasMany(TransacaoFinanceira, { foreignKey: "idCategoria" });
TransacaoFinanceira.belongsTo(Categoria, { foreignKey: "idCategoria" });

OrcamentoMensal.hasMany(TransacaoFinanceira, { foreignKey: "idOrcamento" });
TransacaoFinanceira.belongsTo(OrcamentoMensal, { foreignKey: "idOrcamento" });

Utilizador.hasMany(Auditoria, { foreignKey: "idUtilizador" });
Auditoria.belongsTo(Utilizador, { foreignKey: "idUtilizador" });

// Exportar tudo
module.exports = {
  sequelize,
  Utilizador,
  OrcamentoMensal,
  Categoria,
  TransacaoFinanceira,
  Auditoria,
};
