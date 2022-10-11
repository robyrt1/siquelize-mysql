const defautJoi = require("@hapi/joi");
const joiDate = require("@joi/date");
const joi = defautJoi.extend(joiDate);

const addValidatorTodoJoiSchema = joi.object().keys({
    desc_nivel: joi.string().required(),
});

module.exports = { addValidatorTodoJoiSchema };

