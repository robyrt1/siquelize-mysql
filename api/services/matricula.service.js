const {
  OK,
  CREATED,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  NOT_FOUND,
} = require("../shared/constants/http.code.js");

const dataBase = require("../models");

class MatriculaService {
  constructor() {}

  async get() {
    try {
      const result = await dataBase.Matriculas.findAll({
        include: dataBase.Pessoas,
      });
      return { statusCode: OK, data: result };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log("[ERROR] - ", err),
      };
    }
  }

  async getByMatricula(estudanteId, matriculaId) {
    try {
      const result = await dataBase.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_Id: Number(estudanteId),
        },
      });

      return { statusCode: OK, data: result };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log("[ERROR] - ", err),
      };
    }
  }

  async addMatricula(estudante_id, body) {
    const matriculaFromDB = await dataBase.Matriculas.findOne({
      where: { estudante_id, turma_id: body.turma_id },
    });
    if (matriculaFromDB) {
      return { statusCode: BAD_REQUEST, error: "anrollment already exists" };
    }
    try {
      const result = await dataBase.Matriculas.create({
        estudante_id,
        ...body,
      });
      const data =
        !result.affectedRows > 0
          ? "Pessoas inserted"
          : "Pessoas was not inserted";

      return { statusCode: CREATED, data };
    } catch (err) {
      return { statusCode: INTERNAL_SERVER_ERROR, error: err };
    }
  }

  async updateById(estudanteId, matriculaId, body) {
    // const pessoasFromDB = await this.getByMatricula(estudanteId, matriculaId);

    // if (!pessoasFromDB) {
    //   return { statusCode: BAD_REQUEST, error: `pessoas does not exist` };
    // }
    try {
      await dataBase.Matriculas.update(body, {
        where: { id: Number(matriculaId), estudante_Id: Number(estudanteId) },
      });

      return { statusCode: NO_CONTENT, data: undefined };
    } catch (err) {
      return { statusCode: INTERNAL_SERVER_ERROR, error: `${err}` };
    }
  }

  /**   no paramentro removeById está sendo passado os ids :
   *       estudante_id
   *       matricula_Id
   */
  async removeById(ids) {
    try {
      await dataBase.Matriculas.destroy({ where: { id: Number(ids) } });
      return { statusCode: NO_CONTENT, data: undefined };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log("[ERROR] - ", err),
      };
    }
  }

  async getByTurma(turmaId) {
    try {
      const result = await dataBase.Matriculas.findAndCountAll({
        where: {
          turma_id: Number(turmaId),
          status: "confirmado",
        },
        limit: 20,
        order: [["estudante_id", "DESC"]],
      });

      return { statusCode: OK, data: result };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `Internal Server`,
        msg: console.log("[ERROR] - ", err),
      };
    }
  }

}

module.exports = { MatriculaService };

