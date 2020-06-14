const { Router } = require('express');

const FeedbackController = require('../app/controllers/FeedbackController');

const feedbacksRouter = Router();

feedbacksRouter.get('/', FeedbackController.index);
feedbacksRouter.post('/', FeedbackController.store);
feedbacksRouter.get('/:id', FeedbackController.show);
feedbacksRouter.delete('/:id', FeedbackController.destroy);

module.exports = feedbacksRouter;
