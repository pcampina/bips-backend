const { Router } = require('express');

const partnersRouter = require('./partners.routes');
const categoriesRouter = require('./categories.routes');
const feedbacksRouter = require('./feedbacks.routes');

const routes = Router();

routes.use('/partners', partnersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/feedbacks', feedbacksRouter);

module.exports = routes;
