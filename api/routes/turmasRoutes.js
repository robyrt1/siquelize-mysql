const { TurmaController } = require("../controllers/TurmasController");
const turmaController = new TurmaController();

const turmaRoutes = (app) => {
  // Router Get
  app.get("/turmas", (req, res, next) => {
    turmaController.get(req, res, next);
  }); //TurmasController.pegaTodasAsTurmas
  app.get("/turmas/:id", (req, res, next) => {
    turmaController.getById(req, res, next);
  });
  // app Post
  app.post("/turmas", (req, res, next) => {
    turmaController.add(req, res, next);
  });
  // app Put
  app.put("/turmas/:id", (req, res, next) => {
    turmaController.updateById(req, res, next);
  });
  // app Delete
  app.delete("/turmas/:id", (req, res, next) => {
    turmaController.removeById(req, res, next);
  });
};

module.exports = turmaRoutes;
