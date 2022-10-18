
const { NiveisService } = require("../services/niveis.service")
class NiveisController {
  constructor(){
    this.niveisService = new NiveisService()
  }


   get(req, res, next){
    const result = this.niveisService.get();
    res.status(result.statusCode).json((result));
  }

  getById(req, res, next) {
    const result = this.niveisService.getById(req.params.id);
    res.status(result.statusCode).json((result));
  }

}

module.exports = {NiveisController};
