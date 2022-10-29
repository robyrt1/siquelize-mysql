const {
  OK,
  CREATED,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  NOT_FOUND,
} = require("../shared/constants/http.code.js");

const dataBase = require("../models");
const Sequelize = require("sequelize");

const { JoiValidator } = require("../shared/validators/niveis/joi.validator");
const {
  addValidatorPessoasJoiSchema,
} = require("../shared/validators/pessoas/add.validator.pessoas.joi.schema");
const {
  updateValidatorPessoasJoiSchema,
} = require("../shared/validators/pessoas/update.validator.pessoas.joi.schema");
class PessoasService {
  constructor() {
    this.joiValidator = new JoiValidator();
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

  async getByNome({ nome }) {
    const result = await dataBase.Pessoas.findOne({ where: { nome } });
    return { statusCode: OK, data: result };
  }

  async add(body) {
    // this.joiValidator.validate(addValidatorPessoasJoiSchema, body);
    // const pessoasFromDB = await this.getByNome(body);
    
    // console.log("pessoasFromDB: ", pessoasFromDB);
    // console.log("!!pessoasFromDB?.dataValue", !!pessoasFromDB?.dataValue);
    // if (pessoasFromDB.data) {
    //   return { statusCode: BAD_REQUEST, error: `Levels already exist` };
    // }

    const result = await dataBase.Pessoas.create(body);

    // console.log("result.affectedRows > 0 ? ", result.affectedRows > 0)
    const data =
      !result.affectedRows > 0
        ? "Pessoas inserted"
        : "Pessoas was not inserted";

    return { statusCode: CREATED, data };
  }

  async updateById(id, body) {
    // this.joiValidator.validate(updateValidatorPessoasJoiSchema, body);
    // const checkPessoasId = await this.getById(id);


    // console.log("checkPessoasId: ",checkPessoasId)
    // if (!checkPessoasId.data) {
    //   return { statusCode: BAD_REQUEST, error: `does not exist` };
    // }

    await dataBase.Pessoas.update(body, { where: { id: Number(id) } });

    return { statusCode: NO_CONTENT, data: undefined };
  }

  async removeById(id) {
    const checkNiveisId = await this.getById(id);

    if (!checkNiveisId.data) {
      return { statusCode: BAD_REQUEST, error: `does not exist` };
    }

    await dataBase.Pessoas.destroy({ where: { id: Number(id) } });

    return { statusCode: NO_CONTENT, data: undefined };
  }
}

module.exports = { PessoasService };
