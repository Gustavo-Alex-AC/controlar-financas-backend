const { Categoria } = require("../models/Index");

const CategoriaController = {
  async create(req, res) {
    try {
      const nova = await Categoria.create(req.body);
      res.status(201).json(nova);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao criar categoria" });
    }
  },

  async findAll(req, res) {
    try {
      const lista = await Categoria.findAll();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao listar categorias" });
    }
  },

  async findById(req, res) {
    try {
      const item = await Categoria.findByPk(req.params.id);
      if (!item) return res.status(404).json({ erro: "Categoria não encontrada" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao buscar categoria" });
    }
  },

  async update(req, res) {
    try {
      const item = await Categoria.findByPk(req.params.id);
      if (!item) return res.status(404).json({ erro: "Categoria não encontrada" });
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao atualizar categoria" });
    }
  },

  async delete(req, res) {
    try {
      const item = await Categoria.findByPk(req.params.id);
      if (!item) return res.status(404).json({ erro: "Categoria não encontrada" });
      await item.destroy();
      res.json({ mensagem: "Categoria excluída com sucesso" });
    } catch (err) {
      res.status(500).json({ erro: "Erro ao excluir categoria" });
    }
  }
};

module.exports = CategoriaController;
