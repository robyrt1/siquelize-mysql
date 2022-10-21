const {
    OK,
    CREATED,
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR,
    NO_CONTENT,
    NOT_FOUND,
  } = require("../shared/constants/http.code.js")

  const database = require("../models");


  const { JoiValidator } = require("../shared/validators/niveis/joi.validator")
  const { addValidatorTodoJoiSchema } = require("../shared/validators/niveis/add.validator.niveis.joi.schema")


class NiveisService {
    constructor(){
      this.joiValidator = new JoiValidator();
    }

    async get(){
      const todos = await database.Niveis.findAll();
      console.log(todos);
      return {statusCode: OK, data: todos}
    }

    async getById(id){
      const todos = await database.Niveis.findOne({where: { id: Number(id)}});
      console.log(todos);
      return {statusCode: OK, data: todos}
    }
}


module.exports = { NiveisService }