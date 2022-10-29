const defautJoi = require("@hapi/joi");
const joiDate = require("@joi/date");
const joi = defautJoi.extend(joiDate);

const addValidatorPessoasJoiSchema = joi.object().keys({
    nome: joi.string().optional(),
    ativo:joi.boolean().optional(),
    email: joi.string().optional(),
    role: joi.string().optional()
});

module.exports = { addValidatorPessoasJoiSchema };