const { TurmaService } = require("../services/turma.service");

class TurmaController {
  constructor() {
    this.turmaService = new TurmaService();
  }

  async get(req, res, next) {
    const result = await this.turmaService.get(
      req.query.data_inical,
      req.query.data_final
    );
    res.status(result.statusCode).json(result);
  }

  async getById(req, res, next) {
    const result = await this.turmaService.getById(req.params.id);
    res.status(result.statusCode).json(result);
  }

  async add(req, res, next) {
    const result = await this.turmaService.add(req.body);
    res.status(result.statusCode).json(result);
  }

  async updateById(req, res, next) {
    const result = await this.turmaService.updateById(req.params.id, req.body);
    res.status(result.statusCode).json(result);
  }

  async removeById(req, res, next) {
    const result = await this.turmaService.removeById(req.params.id);
    res.status(result.statusCode).json(result);
  }
}

module.exports = { TurmaController };
