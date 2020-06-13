const { Router } = require("express");

const partnersRouter = require("./partners.routes");

const routes = Router();

routes.use("/partners", partnersRouter);

module.exports = routes;
