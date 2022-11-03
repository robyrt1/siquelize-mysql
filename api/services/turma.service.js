const {
  OK,
  CREATED,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  NOT_FOUND,
} = require("../shared/constants/http.code.js");

const dataBase = require("../models");
const { Op } = require("sequelize");

class TurmaService {
  async get(data_incial, data_final) {
    const where = {};
    data_incial || data_final ? (where.data_inicio = {}) : null;
    data_incial ? (where.data_inicio[Op.gte] = data_incial) : null;
    data_final ? (where.data_inicio[Op.lte] = data_final) : null;
    try {
      const result = await dataBase.Turmas.findAll({ where });
      return { statusCode: OK, data: result };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log("[ERROR] - ", err),
      };
    }
  }

  async getById(id) {
    try {
      const result = await dataBase.Turmas.findOne({
        where: { id: Number(id) },
      });
      return { statusCode: OK, data: result };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log(err),
      };
    }
  }

  async add(body) {
    try {
      const result = await dataBase.Turmas.create(body);
      const data =
        !result.affectedRows > 0
          ? "Turmas inserted"
          : "Turmas was not inserted";
      return { statusCode: CREATED, data };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log(err),
      };
    }
  }

  async updateById(id, body) {
    try {
      await dataBase.Turmas.update(body, { where: { id: Number(id) } });
      return { statusCode: NO_CONTENT, data: undefined };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log(err),
      };
    }
  }

  async removeById(id) {
    try {
      await dataBase.Turmas.destroy({ where: { id: Number(id) } });
      return { statusCode: NO_CONTENT, data: undefined };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log(err),
      };
    }
  }
}

module.exports = { TurmaService };

//   static async pegaTodasAsTurmas(req, res) {
//     const { data_incial, data_final } = req.query;
//     const where = {}
//     data_incial || data_final ? where.data_inicio = {} : null
//     data_incial ? where.data_inicio[Op.gte] = data_incial : null
//     data_final ? where.data_inicio[Op.lte] = data_final : null

//     try {
//       const todasAsturmas = await dataBase.Turmas.findAll({ where });
//       return res.status(200).json(todasAsturmas);
//     } catch (error) {
//       return res.status(500).json(error.message);
//     }
//   }


