const { Router } = require('express');

const partnersRouter = require('./partners.routes');
const categoriesRouter = require('./categories.routes');

const routes = Router();

routes.use('/partners', partnersRouter);
routes.use('/categories', categoriesRouter);

module.exports = routes;
