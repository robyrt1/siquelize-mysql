const {
  OK,
  CREATED,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  NOT_FOUND,
} = require("../shared/constants/http.code.js");

const dataBase = require("../models");
// const Sequelize = require("sequelize");

// const { JoiValidator } = require("../shared/validators/niveis/joi.validator");
// const {
//   addValidatorPessoasJoiSchema,
// } = require("../shared/validators/pessoas/add.validator.pessoas.joi.schema");
// const {
//   updateValidatorPessoasJoiSchema,
// } = require("../shared/validators/pessoas/update.validator.pessoas.joi.schema");

class PessoasService {
  constructor() {
    // this.joiValidator = new JoiValidator();
  }

  async get() {
    const fromAll = await dataBase.Pessoas.scope("allPessoas").findAll();
    return { statusCode: OK, data: fromAll };
  }

  async getActive() {
    const fromAll = await dataBase.Pessoas.findAll();
    return { statusCode: OK, data: fromAll };
  }

  async getById(id) {
    const fromId = await dataBase.Pessoas.findOne({
      where: { id: Number(id) },
    });
    return { statusCode: OK, data: fromId };
  }

  async getByCpf(body) {
    const result = await dataBase.Pessoas.findOne({ where: { cpf: body.cpf } });
    return { statusCode: OK, data: result };
  }

  async add(body) {
    const pessoasFromDB = await this.getByCpf(body);
    // console.log("!!pessoasFromDB?.dataValue", !pessoasFromDB?.dataValue);
    if (pessoasFromDB.data) {
      return { statusCode: BAD_REQUEST, error: `Pessoa already exist` };
    }

    try {
      const result = await dataBase.Pessoas.create(body);

      // console.log("result.affectedRows > 0 ? ", result.affectedRows > 0)
      const data =
        !result.affectedRows > 0
          ? "Pessoas inserted"
          : "Pessoas was not inserted";

      return { statusCode: CREATED, data };
    } catch (err) {
      return {
        statusCode: INTERNAL_SERVER_ERROR,
        error: `INTERNAL_SERVER_ERROR`,
      };
    }
  }

  async updateById(id, body) {
    const checkPessoasId = await this.getById(id);

    if (!checkPessoasId.data) {
      return { statusCode: BAD_REQUEST, error: `does not exist` };
    }
    try {
      await dataBase.Pessoas.update(body, { where: { id: Number(id) } });
      return { statusCode: NO_CONTENT, data: undefined };
    } catch (err) {
      return { statusCode: INTERNAL_SERVER_ERROR, Error: `INTERNAL SERVER` };
    }
  }

  async removeById(id) {
    const checkNiveisId = await this.getById(id);

    if (!checkNiveisId.data) {
      return { statusCode: BAD_REQUEST, error: `does not exist` };
    }

    await dataBase.Pessoas.destroy({ where: { id: Number(id) } });

    return { statusCode: NO_CONTENT, data: undefined };
  }

  async restoreById(id) {
    const checkPessoasId = await this.getById(id);
    // console.log("checkPessoasId",checkPessoasId);
    // console.log("!!checkPessoasId?.datavalue",!!checkPessoasId?.datavalue)
    if (checkPessoasId.data) {
      return { statusCode: BAD_REQUEST, error: `does not exist` };
    }
    try {
      await dataBase.Pessoas.restore({ where: { id: Number(id) } });
      return { statusCode: NO_CONTENT, data: undefined };
    } catch (err) {
      return { statusCode: INTERNAL_SERVER_ERROR, Error: `INTERNAL SERVER` };
    }
  }

  async getByIdMatriculaActive(estudanteId) {
    try {
      const result = await dataBase.Pessoas.findOne({
        where:{estudante_id: Number(estudanteId)},
        // include: "aulasMatriculadas",
      });
      return { statusCode: OK, data: result };
    } catch (err) {
      return {
        statusCode: NOT_FOUND,
        error:
          "Estudante não encontrado: 1) Estudante sem registrou ou 2) Matricula Cancelada",
      };
    }
  }
}

module.exports = { PessoasService };

//   static async pegaMatricula(req, res) {
//     const { estudanteId } = req.params;
//     try {
//       const pessoa = await dataBase.Pessoas.findOne({
//         where: { id: Number(estudanteId) },
//       });

//       const matriculas = await pessoa.getAulasMatriculadas();
//       return res.status(200).json(matriculas);
//     } catch (error) {
//       return res
//         .status(500)
//         .json(
//           "Estudante não encontrado: 1) Estudante sem registrou ou 2) Matricula Cancelada"
//         );
//     }
//   }
