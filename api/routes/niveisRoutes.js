
const {Router} = require("express");
const { get } = require("mongoose");
const { NiveisController } = require("../controllers/NiveisController");
const niveisController = new NiveisController();

const niveisRoutes = Router()

niveisRoutes.get("/niveis", (req, res, next) =>{
  niveisController.get(req, res, next);
})

niveisRoutes.get("/niveis/:id", (req, res, next) => {
  niveisController.getById(req, res, next);
})


module.exports =  niveisRoutes;
