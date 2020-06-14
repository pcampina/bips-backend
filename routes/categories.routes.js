const { Router } = require('express');

const CategoryController = require('../app/controllers/CategoryController');

const categoriesRouter = Router();

categoriesRouter.get('/', CategoryController.index);
categoriesRouter.post('/', CategoryController.store);
categoriesRouter.get('/:id', CategoryController.show);
categoriesRouter.delete('/:id', CategoryController.destroy);

module.exports = categoriesRouter;
