const { PessoasService } = require("../services/pessoas.service");

/**
 *  Controller de um Crud ,
 *  1 requisito : Exibir só os ativos
 *  2 requisito : Excluir sem deletar do Banco e restaurar quando necessario
 */

class PessoasController {
  constructor() {
    this.pessoasService = new PessoasService();
  }

  async get(req, res, next) {
    const result = await this.pessoasService.get();
    res.status(result.statusCode).json(result);
  }

  async getActive(req, res, next) {
    const result = await this.pessoasService.getActive();
    res.status(result.statusCode).json(result);
  }

  async getById(req, res, next) {
    const result = await this.pessoasService.getById(req.params.id);
    res.status(result.statusCode).json(result);
  }

  async add(req, res, next) {
    const result = await this.pessoasService.add(req.body);
    res.status(result.statusCode).json(result);
  }

  async updateById(req, res, next) {
    const result = await this.pessoasService.updateById(
      req.params.id,
      req.body
    );
    res.status(result.statusCode).json(result);
  }

  async removeById(req, res, next) {
    const result = await this.pessoasService.removeById(req.params.id);
    res.status(result.statusCode).json(result);
  }

  async restoreById(req, res, next) {
    const result = await this.pessoasService.restoreById(req.params.id);
    res.status(result.statusCode).json(result);
  }

  async getByIdMatriculaActive(req, res, next){
    const result = await this.pessoasService.getByIdMatriculaActive(req.params.estudanteId)
  }
}

module.exports = { PessoasController };
