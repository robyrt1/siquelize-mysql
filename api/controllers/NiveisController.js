
const { NiveisService } = require("../services/niveis.service")
class NiveisController {
  constructor(){
    this.niveisService = new NiveisService()
  }


   async get(req, res, next){
    const result = await this.niveisService.get();
    res.status(result.statusCode).json(result);
  }

  async getById(req, res, next) {
    const result = await this.niveisService.getById(req.params.id);
    res.status(result.statusCode).json(result);
  }

}

module.exports = { NiveisController };
