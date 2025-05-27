import { Auditoria } from "../models/index.js";

const AuditoriaController = {
  async create(req, res) {
    try {
      const novo = await Auditoria.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao criar auditoria" });
    }
  },

  async findAll(req, res) {
    try {
      const lista = await Auditoria.findAll();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao listar auditorias" });
    }
  },

  async findById(req, res) {
    try {
      const item = await Auditoria.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Auditoria não encontrada" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao buscar auditoria" });
    }
  },

  async update(req, res) {
    try {
      const item = await Auditoria.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Auditoria não encontrada" });
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao atualizar auditoria" });
    }
  },

  async delete(req, res) {
    try {
      const item = await Auditoria.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Auditoria não encontrada" });
      await item.destroy();
      res.json({ mensagem: "Auditoria excluída com sucesso" });
    } catch (err) {
      res.status(500).json({ erro: "Erro ao excluir auditoria" });
    }
  },
};

export default AuditoriaController;
