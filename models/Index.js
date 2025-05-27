import sequelize from "../config/database.js";

import Utilizador from "./Utilizador.js";
import Orcamento from "./Orcamento.js";
import Categoria from "./Categoria.js";
import TransacaoFinanceira from "./TransaccaoFinanceira.js";
import Auditoria from "./Auditoria.js";

// Associações

Utilizador.hasMany(Orcamento, { foreignKey: "idUtilizador" });
Orcamento.belongsTo(Utilizador, { foreignKey: "idUtilizador" });

Utilizador.hasMany(TransacaoFinanceira, { foreignKey: "idUtilizador" });
TransacaoFinanceira.belongsTo(Utilizador, { foreignKey: "idUtilizador" });

Categoria.hasMany(TransacaoFinanceira, { foreignKey: "idCategoria" });
TransacaoFinanceira.belongsTo(Categoria, { foreignKey: "idCategoria" });

Orcamento.hasMany(TransacaoFinanceira, { foreignKey: "idOrcamento" });
TransacaoFinanceira.belongsTo(Orcamento, { foreignKey: "idOrcamento" });

Utilizador.hasMany(Auditoria, { foreignKey: "idUtilizador" });
Auditoria.belongsTo(Utilizador, { foreignKey: "idUtilizador" });

// Exportar usando ES Modules
export {
  sequelize,
  Utilizador,
  Orcamento,
  Categoria,
  TransacaoFinanceira,
  Auditoria,
};
