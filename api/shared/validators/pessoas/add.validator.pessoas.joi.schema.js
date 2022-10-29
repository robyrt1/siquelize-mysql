const defautJoi = require("@hapi/joi");
const joiDate = require("@joi/date");
const joi = defautJoi.extend(joiDate);

const addValidatorPessoasJoiSchema = joi.object().keys({
    nome: joi.string().required(),
    ativo:joi.boolean().optional(),
    email: joi.string().required(),
    role: joi.string().required()
});

module.exports = { addValidatorPessoasJoiSchema };