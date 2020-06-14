const { Category } = require('../models');

class CategoryController {
  async index(request, response) {
    try {
      const category = await Category.findAll({
        attributes: ['id', 'name'],
      });

      response.json(category);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async show(request, response) {
    try {
      const category = await Category.findByPk(request.params.id, {
        attributes: ['id', 'name'],
      });

      return response.json(category);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async store(request, response) {
    try {
      const category = await Category.create(request.body);

      response.json(category);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const category = await Category.findByPk(request.params.id);

      await category.destroy();

      return response.json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = new CategoryController();
