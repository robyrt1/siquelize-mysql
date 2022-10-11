const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { todoRoutes } = require("../routes/index.js");

class ExpressConfig {
  constructor() {
    if (!ExpressConfig._instance) ExpressConfig._instance = this;

    this.init();
  }

  getInstance() {
    return ExpressConfig._instance;
  }

  setServer() {
    if (!this.getInstance().app) this.getInstance().app = express();
  }
  getServer() {
    return this.getInstance().app;
  }
  setMiddlewares(middlewares) {
    middlewares.forEach((middleware) => this.getServer().use(middleware));
  }
  setRoutes(routesContext) {
    routesContext(this.getServer());
  }
  setErrorLogHandlers() {
    this.getServer().use(function (error, req, res , next){
        console.error(error);
        res.status(error.statusCode || 500).json(error);
    });
  }
  init() {
    this.setServer();

    const middleware = [
      cors(),
      bodyParser.urlencoded({ extended: false }),
      bodyParser.json(),
    ];

    this.setMiddlewares(middleware);
    this.setRoutes(todoRoutes);
    this.setErrorLogHandlers();
  }
}


module.exports = { ExpressConfig };
