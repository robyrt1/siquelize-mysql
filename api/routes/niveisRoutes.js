
const { NiveisController } = require("../controllers/NiveisController");
const niveisController = new NiveisController();

const {Router} = require("express")
const router = Router()

router.get("/niveis", (req, res, next) =>{
  niveisController.get(req, res, next);
})


module.exports =  router;
