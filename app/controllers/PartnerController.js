const { Partner } = require('../models');

class PartnerController {
  async index(request, response) {
    try {
      const partners = await Partner.findAll({
        attributes: ['id', 'name', 'description', 'latitude', 'longitude', 'CategoryId', 'image', 'rating'],
      });

      response.json(partners);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async show(request, response) {
    try {
      const partner = await Partner.findByPk(request.params.id, {
        attributes: ['id', 'name', 'description', 'latitude', 'longitude', 'CategoryId', 'image', 'rating'],
      });

      return response.json(partner);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async store(request, response) {
    try {
      const modifyData = {
        ...request.body,
        rating: Math.floor(Math.random() * Math.floor(6))
      }

      const partner = await Partner.create(modifyData);

      response.json(partner);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async destroy(request, response) {
    try {
      const partner = await Partner.findByPk(request.params.id);

      await partner.destroy();

      return response.json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PartnerController();
