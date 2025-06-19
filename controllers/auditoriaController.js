import { Auditoria } from "../models/index.js";

const AuditoriaController = {
  // Buscar todas as auditorias do usuário autenticado
  async findAll(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Usuário não autenticado" });
      }

      const userId = req.user.id;
      const auditorias = await Auditoria.findAll({
        where: { idUtilizador: userId },
      });

      res.json(auditorias);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar auditorias", error });
    }
  },
};

export default AuditoriaController;
