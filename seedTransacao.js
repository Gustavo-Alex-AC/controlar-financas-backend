import TransacaoFinanceira from "./models/TransacaoFinanceira.js";
import sequelize from "./config/sequelize.js";

(async () => {
  try {
    await sequelize.sync(); // ou { force: true } para recriar

    const transacoes = [
      {
        data: "2025-06-01",
        valor: 2500.0,
        descricao: "Salário",
        tipo: "receita",
        idUtilizador: 1,
        idCategoria: 1,
      },
      {
        data: "2025-06-03",
        valor: 120.0,
        descricao: "Supermercado",
        tipo: "despesa",
        idUtilizador: 1,
        idCategoria: 2,
      },
      {
        data: "2025-06-05",
        valor: 60.0,
        descricao: "Internet",
        tipo: "despesa",
        idUtilizador: 1,
        idCategoria: 3,
      },
    ];

    for (const transacao of transacoes) {
      await TransacaoFinanceira.create(transacao, {
        userId: transacao.idUtilizador, // usado na auditoria
      });
    }

    console.log("Transações inseridas com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("Erro ao inserir transações:", error);
    process.exit(1);
  }
})();
