const {
  OK,
  CREATED,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  NOT_FOUND,
} = require("../shared/constants/http.code.js");

const database = require("../models");

const { JoiValidator } = require("../shared/validators/niveis/joi.validator");
const {
  addValidatorTodoJoiSchema,
} = require("../shared/validators/niveis/add.validator.niveis.joi.schema");
const {
  updateValidatorTodoJoiSchema,
} = require("../shared/validators/niveis/update.validator.niveis.joi.schema");

class NiveisService {
  constructor() {
    this.joiValidator = new JoiValidator();
  }

  async get() {
    const todos = await database.Niveis.findAll();
    console.log(todos);
    return { statusCode: OK, data: todos };
  }

  async getById(id) {
    const todos = await database.Niveis.findOne({ where: { id: Number(id) } });
    return { statusCode: OK, data: todos };
  }

  async getByDesc({ desc_nivel }) {
    const result = await database.Niveis.findOne({ where: { desc_nivel } });
    return { statusCode: OK, data: result };
  }

  async add(body) {
    this.joiValidator.validate(addValidatorTodoJoiSchema, body);
    const niveisFromDB = await this.getByDesc(body);

    // console.log("!!niveisFromDB?.dataValue", !!niveisFromDB?.dataValue);
    if (niveisFromDB.data) {
      return { statusCode: BAD_REQUEST, error: `Levels already exist` };
    }

    const result = await database.Niveis.create(body);

    // console.log("result.affectedRows > 0 ? ", result.affectedRows > 0)
    const data =
      !result.affectedRows > 0 ? "todo inserted" : "todo was not inserted";

    return { statusCode: CREATED, data };
  }

  async updateById(id, body) {
    this.joiValidator.validate(updateValidatorTodoJoiSchema, body);
    const checkNiveisId = await this.getById(id);

    if (!checkNiveisId.data) {
      return { statusCode: BAD_REQUEST, error: `does not exist` };
    }

    await database.Niveis.update(body, { where: { id: Number(id) } });

    return { statusCode: NO_CONTENT, data: undefined };
  }

  async removeById(id) {
    const checkNiveisId = await this.getById(id);

    if (!checkNiveisId.data) {
      return { statusCode: BAD_REQUEST, error: `does not exist` };
    }

    await database.Niveis.destroy({where:{id:Number(id)}});

    return {statusCode: NO_CONTENT, data: undefined}
  }
}

module.exports = { NiveisService };
