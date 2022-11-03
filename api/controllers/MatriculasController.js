const { MatriculaService } = require("../services/matricula.service");

class MatriculasController {
  constructor() {
    this.matriculaService = new MatriculaService();
  }

  async get(req, res, next) {
    const result = await this.matriculaService.get();
    res.status(result.statusCode).json(result);
  }

  async getByMatricula(req, res, next) {
    const result = await this.matriculaService.getByMatricula(
      req.params.estudanteId,
      req.params.matriculaId
    );
    res.status(result.statusCode).json(result);
  }

  async addMatricula(req, res, next) {
    const result = await this.matriculaService.addMatricula(req.params.estudanteId,req.body);
    res.status(result.statusCode).json(result);
  }

  async updateById(req, res, next) {
    const result = await this.matriculaService.updateById(
      req.params.matriculaId,
      req.params.estudanteId,
      req.body.status
    );
    res.status(result.statusCode).json(result);
  }

  async removeById(req, res, next) {
    const ids = [
      {
        estudante_id: req.params.estudanteId,
        matricula_Id: req.params.matriculaId,
      },
    ];
    const result = await this.matriculaService.removeById(
      ids.map((id) => id.matricula_Id)
    );
    res.status(result.statusCode).json(result);
  }

  async getByTurma(req, res, next){
    const {turmaId} = req.params
    const result = await this.matriculaService.getByTurma(turmaId)
    res.status(result.statusCode).json(result)
  }

}

module.exports = { MatriculasController };
