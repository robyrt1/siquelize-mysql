const { PessoasController } = require("../controllers/PessoasController.js");
const pessoasController = new PessoasController();

const pessoasRoutes = (app) => {
  // Router de gets Pessoas
  app.get("/pessoas", (req, res, next) => {
    pessoasController.get(req, res, next);
  });

  app.get("/pessoas/active", (req, res, next) => {
    pessoasController.getActive(req, res, next);
  });

  app.get("/pessoas/:id", (req, res, next) => {
    pessoasController.getById(req, res, next);
  });

  // app de post Pessoas
  app.post("/pessoas", (req, res, next) => {
    pessoasController.add(req, res, next);
  });

  app.post("/pessoas/:id/restaura", (req, res, next) => {
    pessoasController.restoreById(req, res, next);
  });

  // app de Put Pessoas
  app.put("/pessoas/:id", (req, res, next) => {
    pessoasController.updateById(req, res, next);
  });

  // app de Delete Pessoas
  app.delete("/pessoas/:id", (req, res, next) => {
    pessoasController.removeById(req, res, next);
    1;
  });

  app.get("/pessoas/estudante/:estudanteId", (req, res, next) =>{
    pessoasController.getByIdMatriculaActive(req, res, next);
  })
};

module.exports = pessoasRoutes;
