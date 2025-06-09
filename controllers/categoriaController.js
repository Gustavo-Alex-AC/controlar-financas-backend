import { Categoria } from "../models/index.js";

const CategoriaController = {
  async create(req, res) {
    try {
      const categoria = await Categoria.create({
        ...req.body,
        userId: req.user.id,
      });
      res.status(201).json(categoria);
    } catch (err) {
      res.status(500).json({ error: "Erro ao criar categoria" });
    }
  },

  // async findAll(req, res) {
  //   try {
  //     const userId = req.user?.id;

  //     if (!userId) {
  //       return res.status(401).json({ error: "Usuário não autenticado" });
  //     }

  //     const categorias = await Categoria.findAll({
  //       where: { idUtilizador: userId }, // <- nome consistente
  //     });

  //     res.status(200).json(categorias);
  //   } catch (error) {
  //     console.error("Erro ao buscar categorias:", error);
  //     res.status(500).json({ error: "Erro ao buscar categorias" });
  //   }
  // },

  async findAll(req, res) {
    try {
      const categorias = await Categoria.findAll();
      res.status(200).json(categorias);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      res.status(500).json({ error: "Erro ao buscar categorias" });
    }
  },

  async findById(req, res) {
    try {
      const categoria = await Categoria.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!categoria) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }
      res.json(categoria);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar categoria" });
    }
  },

  async update(req, res) {
    try {
      const categoria = await Categoria.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!categoria) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }
      await categoria.update(req.body);
      res.json(categoria);
    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar categoria" });
    }
  },

  async delete(req, res) {
    try {
      const categoria = await Categoria.findOne({
        where: { id: req.params.id, userId: req.user.id },
      });
      if (!categoria) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }
      await categoria.destroy();
      res.json({ mensagem: "Categoria excluída com sucesso" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao excluir categoria" });
    }
  },
};

export default CategoriaController;
