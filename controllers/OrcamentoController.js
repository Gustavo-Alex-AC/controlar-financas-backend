import { Orcamento } from "../models/index.js";

const OrcamentoController = {
  async create(req, res) {
    try {
      const novo = await Orcamento.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao criar orçamento" });
    }
  },

  async findAll(req, res) {
    try {
      const lista = await Orcamento.findAll();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao listar orçamentos" });
    }
  },

  async findById(req, res) {
    try {
      const item = await Orcamento.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Orçamento não encontrado" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao buscar orçamento" });
    }
  },

  async update(req, res) {
    try {
      const item = await Orcamento.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Orçamento não encontrado" });
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao atualizar orçamento" });
    }
  },

  async delete(req, res) {
    try {
      const item = await Orcamento.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Orçamento não encontrado" });
      await item.destroy();
      res.json({ mensagem: "Orçamento excluído com sucesso" });
    } catch (err) {
      res.status(500).json({ erro: "Erro ao excluir orçamento" });
    }
  },
};

export default OrcamentoController;
