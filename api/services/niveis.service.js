const {
    OK,
    CREATED,
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR,
    NO_CONTENT,
    NOT_FOUND,
  } = require("../shared/constants/http.code")

  const db = require("../models");

  const { JoiValidator } = require("../shared/validators/niveis/joi.validator")
  const { addValidatorTodoJoiSchema } = require("../shared/validators/niveis/add.validator.niveis.joi.schema")


class NiveisService {
    constructor(){
      this.joiValidator = new JoiValidator();
    }

     get(){
      const todos =  db.Niveis.findAll();
      return {statusCode: OK, data: todos}
    }
}

module.exports = { NiveisService }