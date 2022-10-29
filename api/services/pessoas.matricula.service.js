const { OK } = require("../shared/constants/http.code");
const dataBase = require("../models");
const { PessoasService } = require("./pessoas.service");

class PessoasMatriculasService extends PessoasService {
  async getByMatricula( estudanteId, matriculaId ) {
    const result = await dataBase.Matriculas.findOne({
      where: {
        id: Number(matriculaId),
        estudante_Id: Number(estudanteId),
      },
    });

    return { statusCode: OK, data: result };
  }
}

module.exports = { PessoasMatriculasService };
