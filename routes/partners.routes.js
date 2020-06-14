const { Router } = require('express');

const PartnerController = require('../app/controllers/PartnerController');

const partnersRouter = Router();

partnersRouter.get('/', PartnerController.index);
partnersRouter.post('/', PartnerController.store);
partnersRouter.get('/:id', PartnerController.show);
partnersRouter.patch('/:id', PartnerController.update);
partnersRouter.delete('/:id', PartnerController.destroy);

module.exports = partnersRouter;
