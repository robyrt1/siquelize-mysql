const { NiveisController } = require("../controllers/NiveisController");
const niveisController = new NiveisController();

const niveisRoutes = (app) => {
  app.get("/niveis", (req, res, next) => {
    niveisController.get(req, res, next);
  });

  app.get("/niveis/:id", (req, res, next) => {
    niveisController.getById(req, res, next);
  });

  app.post("/niveis", (req, res, next) => {
    niveisController.add(req, res, next);
  });

  app.put("/niveis/:id", (req, res, next) => {
    niveisController.updateById(req, res, next);
  });

  app.delete("/niveis/:id", (req, res, next) => {
    niveisController.removeById(req, res, next);
  });
};

module.exports = niveisRoutes;
