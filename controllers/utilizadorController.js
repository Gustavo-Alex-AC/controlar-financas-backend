const { User } = require("../models/Utilizador");

const UserController = {
  async create(req, res) {
    try {
      const novo = await User.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao criar usuário" });
    }
  },

  async findAll(req, res) {
    try {
      const lista = await User.findAll();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao listar usuários" });
    }
  },

  async findById(req, res) {
    try {
      const item = await User.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Usuário não encontrado" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao buscar usuário" });
    }
  },

  async update(req, res) {
    try {
      const item = await User.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Usuário não encontrado" });
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao atualizar usuário" });
    }
  },

  async delete(req, res) {
    try {
      const item = await User.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Usuário não encontrado" });
      await item.destroy();
      res.json({ mensagem: "Usuário excluído com sucesso" });
    } catch (err) {
      res.status(500).json({ erro: "Erro ao excluir usuário" });
    }
  },
};

module.exports = UserController;
