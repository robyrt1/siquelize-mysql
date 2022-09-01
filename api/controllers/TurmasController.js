const dataBase = require("../models");
const { Op } = require("sequelize");

class TurmasController {
  static async pegaTodasAsTurmas(req, res) {
    const { data_incial, data_final } = req.query;
    const where = {}
    data_incial || data_final ? where.data_inicio = {} : null
    data_incial ? where.data_inicio[Op.gte] = data_incial : null
    data_final ? where.data_inicio[Op.lte] = data_final : null
    
    try {
      const todasAsturmas = await dataBase.Turmas.findAll({ where });
      return res.status(200).json(todasAsturmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async buscaId(req, res) {
    const { id } = req.params;
    try {
      const oneTurma = await dataBase.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(oneTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createdTurma(req, res) {
    const newTurma = req.body;
    try {
      const newTurmaCreated = await dataBase.Turmas.create(newTurma);
      return res.status(201).json(newTurmaCreated);
    } catch (error) {
      return res.status.json(error.message);
    }
  }

  static async updateTurma(req, res) {
    const { id } = req.params;
    const newInformation = req.body;
    try {
      await dataBase.Turmas.update(newInformation, {
        where: { id: Number(id) },
      });
      const atualizedTurma = await dataBase.Turmas.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(atualizedTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteTurma(req, res) {
    const { id } = req.params;
    try {
      await dataBase.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ Sucess: `id: ${id} excluido` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmasController;
