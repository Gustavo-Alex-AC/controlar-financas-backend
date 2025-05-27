import { TransacaoFinanceira } from "../models/index.js";

const TransacaoController = {
  async create(req, res) {
    try {
      const nova = await TransacaoFinanceira.create(req.body);
      res.status(201).json(nova);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao criar transação" });
    }
  },

  async findAll(req, res) {
    try {
      const lista = await TransacaoFinanceira.findAll();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao listar transações" });
    }
  },

  async findById(req, res) {
    try {
      const item = await TransacaoFinanceira.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Transação não encontrada" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao buscar transação" });
    }
  },

  async update(req, res) {
    try {
      const item = await TransacaoFinanceira.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Transação não encontrada" });
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao atualizar transação" });
    }
  },

  async delete(req, res) {
    try {
      const item = await TransacaoFinanceira.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Transação não encontrada" });
      await item.destroy();
      res.json({ mensagem: "Transação excluída com sucesso" });
    } catch (err) {
      res.status(500).json({ erro: "Erro ao excluir transação" });
    }
  },
};

export default TransacaoController;
