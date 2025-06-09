import { Auditoria } from "../models/index.js";

export async function registrarAuditoria({ userId, acao, tabela, dados }) {
  try {
    await Auditoria.create({
      userId,
      acao,
      tabela,
      dados,
    });
  } catch (err) {
    console.error("Erro ao registrar auditoria:", err);
  }
}
