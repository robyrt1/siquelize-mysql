const { NiveisService } = require("../services/niveis.service");
class NiveisController {
  constructor() {
    this.niveisService = new NiveisService();
  }

  async get(req, res, next) {
    const result = await this.niveisService.get();
    res.status(result.statusCode).json(result);
  }

  async getById(req, res, next) {
    const result = await this.niveisService.getById(req.params.id);
    res.status(result.statusCode).json(result);
  }

  async add(req, res, next) {
    const result = await this.niveisService.add(req.body);
    res.status(result.statusCode).json(result);
  }

  async updateById(req, res, next) {
    const result = await this.niveisService.updateById(req.params.id, req.body);
    res.status(result.statusCode).json(result);
  }

  async removeById(req, res, next) {
    const result = await this.niveisService.removeById(req.params.id);
    res.status(result.statusCode).json(result);
  }
}

module.exports = { NiveisController };
