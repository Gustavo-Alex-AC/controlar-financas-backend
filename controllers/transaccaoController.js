import { TransacaoFinanceira } from "../models/index.js";

const TransacaoController = {
  async create(req, res) {
    try {
      const { descricao, valor, data, idCategoria, tipo } = req.body;

      const transacao = await TransacaoFinanceira.create({
        descricao,
        valor,
        data,
        tipo,
        idCategoria,
        idUtilizador: req.user.id, // <- usar o mesmo nome que está no banco
      });

      res.status(201).json(transacao);
    } catch (err) {
      console.error("Erro ao criar transação:", err);
      res.status(500).json({ error: "Erro ao criar transação" });
    }
  },

  async findAll(req, res) {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ error: "Usuário não autenticado" });
      }

      const transacoes = await TransacaoFinanceira.findAll({
        where: { idUtilizador: userId }, // <- nome consistente
      });

      res.status(200).json(transacoes);
    } catch (error) {
      console.error("Erro ao buscar transações:", error);
      res.status(500).json({ error: "Erro ao buscar transações" });
    }
  },

  async findById(req, res) {
    try {
      const transacao = await TransacaoFinanceira.findOne({
        where: { id: req.params.id, idUtilizador: req.user.id }, // <- aqui também
      });
      if (!transacao) {
        return res.status(404).json({ error: "Transação não encontrada" });
      }
      res.json(transacao);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar transação" });
    }
  },

  async update(req, res) {
    try {
      const transacao = await TransacaoFinanceira.findOne({
        where: { id: req.params.id, idUtilizador: req.user.id }, // <- manter consistente
      });
      if (!transacao) {
        return res.status(404).json({ error: "Transação não encontrada" });
      }

      await transacao.update(req.body);
      res.json(transacao);
    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar transação" });
    }
  },

  async delete(req, res) {
    try {
      const transacao = await TransacaoFinanceira.findOne({
        where: { id: req.params.id, idUtilizador: req.user.id }, // <- idem
      });
      if (!transacao) {
        return res.status(404).json({ error: "Transação não encontrada" });
      }

      await transacao.destroy();
      res.json({ mensagem: "Transação excluída com sucesso" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao excluir transação" });
    }
  },
};

export default TransacaoController;
