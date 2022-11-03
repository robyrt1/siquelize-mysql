const { MatriculasController } = require("../controllers/MatriculasController");
const matriculasControler = new MatriculasController();

const matriculasRoutes = (app) => {

  app.get("/matricula", (req, res, next) => {
    matriculasControler.get(req, res, next);
  })

  app.get("/pessoas/:estudanteId/matricula/:matriculaId", (req, res, next) => {
    matriculasControler.getByMatricula(req, res, next);
  });

  app.get("/matricula/:estudanteId", (req, res, next) => {});

  app.get("/matricula/:turmaId/confirmadas", (req, res, next) => {
    matriculasControler.getByTurma(req, res, next);
  });

  app.post("/matricula/:estudanteId", (req, res, next) => {
    matriculasControler.addMatricula(req, res, next);
  });

  app.put("/matricula/:matriculaId/pessoas/:estudanteId", (req, res, next) => {
    matriculasControler.updateById(req, res, next);
  });

  app.delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    (req, res, next) => {
      matriculasControler.removeById(req, res, next);
    }
  );

  
};

module.exports = matriculasRoutes;
