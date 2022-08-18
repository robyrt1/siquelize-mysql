const dataBase = require("../models");

class NiveisController {
  static async pegaTodasOsNiveis(_req, res) {
    try {
      const todosOsNiveis = await dataBase.Niveis.findAll();
      return res.json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async buscaID(req, res) {
    const { id } = req.params;
    try {
      const oneNivel = await dataBase.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(oneNivel);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async createNivel(req, res) {
    const newNivel = req.body;
    try {
      const newNivelCreated = await dataBase.Niveis.create(newNivel);
      return res.status(201).json(newNivelCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateNivel(req, res) {
    const { id } = req.params;
    const newInformation = req;

    try {
      await dataBase.Niveis.update(newInformation, {
        where: { id: Number(id) },
      });
      const atualizedNivel = await dataBase.Niveis.findOnd({
        where: { id: Number(id) },
      });

      return res.status(200).json(atualizedNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteNivel(req, res) {
    const { id } = req.params;
    try {
      await dataBase.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ sucess: `id: ${id} excluido` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NiveisController;
