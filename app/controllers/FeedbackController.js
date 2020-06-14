const { Feedback } = require('../models');

class FeedbackController {
  async index(request, response) {
    try {
      const feedback = await Feedback.findAll({
        attributes: ['id', 'author', 'description'],
      });

      response.json(feedback);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async show(request, response) {
    try {
      const feedback = await Feedback.findByPk(request.params.id, {
        attributes: ['id', 'author', 'description'],
      });

      return response.json(feedback);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async store(request, response) {
    try {
      const feedback = await Feedback.create(request.body);

      response.json(feedback);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const feedback = await Feedback.findByPk(request.params.id);

      await feedback.destroy();

      return response.json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = new FeedbackController();
