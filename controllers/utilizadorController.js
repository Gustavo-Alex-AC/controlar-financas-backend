import { Utilizador } from "../models/index.js";

const UtilizadorController = {
  async create(req, res) {
    try {
      const novo = await Utilizador.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao criar utilizador" });
    }
  },

  async findAll(req, res) {
    try {
      const lista = await Utilizador.findAll();
      res.json(lista);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao listar utilizadores" });
    }
  },

  async findById(req, res) {
    try {
      const item = await Utilizador.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Utilizador não encontrado" });
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao buscar utilizador" });
    }
  },

  async update(req, res) {
    try {
      const item = await Utilizador.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Utilizador não encontrado" });
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ erro: "Erro ao atualizar utilizador" });
    }
  },

  async delete(req, res) {
    try {
      const item = await Utilizador.findByPk(req.params.id);
      if (!item)
        return res.status(404).json({ erro: "Utilizador não encontrado" });
      await item.destroy();
      res.json({ mensagem: "Utilizador excluído com sucesso" });
    } catch (err) {
      res.status(500).json({ erro: "Erro ao excluir utilizador" });
    }
  },
};

export default UtilizadorController;
