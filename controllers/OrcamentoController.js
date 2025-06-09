import { Orcamento } from "../models/index.js";

const OrcamentoController = {
  async create(req, res) {
    try {
      const orcamento = await Orcamento.create({
        ...req.body,
        userId: req.user.id,
      });
      res.status(201).json(orcamento);
    } catch (err) {
      res.status(500).json({ error: "Erro ao criar orçamento" });
    }
  },

  async findAll(req, res) {
    try {
      const orcamentos = await Orcamento.findAll({
        where: { userId: req.user.id },
      });
      res.json(orcamentos);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar orçamentos" });
    }
  },

  async findAll(req, res) {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({ error: "Usuário não autenticado" });
      }

      const orcamentos = await Orcamento.findAll({
        where: { idUtilizador: userId }, // <- nome consistente
      });

      res.status(200).json(orcamentos);
    } catch (error) {
      console.error("Erro ao buscar orçamentos:", error);
      res.status(500).json({ error: "Erro ao buscar orçamentos" });
    }
  },

  async findById(req, res) {
    try {
      const orcamento = await Orcamento.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!orcamento) {
        return res.status(404).json({ error: "Orçamento não encontrado" });
      }
      res.json(orcamento);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar orçamento" });
    }
  },

  async update(req, res) {
    try {
      const orcamento = await Orcamento.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!orcamento) {
        return res.status(404).json({ error: "Orçamento não encontrado" });
      }
      await orcamento.update(req.body);
      res.json(orcamento);
    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar orçamento" });
    }
  },

  async delete(req, res) {
    try {
      const orcamento = await Orcamento.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!orcamento) {
        return res.status(404).json({ error: "Orçamento não encontrado" });
      }
      await orcamento.destroy();
      res.json({ mensagem: "Orçamento excluído com sucesso" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao excluir orçamento" });
    }
  },
};

export default OrcamentoController;
