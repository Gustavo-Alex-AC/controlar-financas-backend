import { Utilizador } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UtilizadorController = {
  // Criação de Utilizador
  async create(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const senhaHash = await bcrypt.hash(senha, 10);
      //const novo = await Utilizador.create({ ...resto, senha: senhaHash });

      const novo = await Utilizador.create({
        nomeUtilizador: nome,
        emailUtilizador: email,
        senhaUtilizador: senhaHash,
      });

      res.status(201).json(novo);
    } catch (err) {
      console.error("Erro ao criar utilizador:", err); // <-- veja no terminal
      res.status(500).json({ erro: "Erro ao criar utilizador" });
    }
  },

  // Login Utilizador
  async login(req, res) {
    const { email, senha } = req.body;

    try {
      const utilizador = await Utilizador.findOne({
        where: { emailUtilizador: email },
      });

      if (!utilizador) {
        return res.status(401).json({ message: "Email ou senha inválido" });
      }

      const senhaCorreta = await bcrypt.compare(
        senha,
        utilizador.senhaUtilizador
      );

      if (!senhaCorreta) {
        return res.status(401).json({ message: "Email ou senha inválido" });
      }

      const token = jwt.sign(
        {
          id: utilizador.idUtilizador,
          email: utilizador.emailUtilizador,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.json({
        message: "Login bem-sucedido",
        token,
        user: {
          id: utilizador.idUtilizador,
          nome: utilizador.nomeUtilizador,
          email: utilizador.emailUtilizador,
        },
      });
    } catch (err) {
      console.error("Erro no login:", err);
      res.status(500).json({ erro: "Erro ao fazer login" });
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
