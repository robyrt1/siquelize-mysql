const { BAD_REQUEST } = require("../../constants/http.code");
class JoiValidator {
    validate(schema, payload){
        const { value, error } = schema.validate(payload)
        if(error) throw { statusCode: BAD_REQUEST, error};

        return value;
    }
}

module.exports = { JoiValidator };