const { Router } = require("express");

const { Partner } = require("../app/models");
const { isUuid } = require("uuidv4");

const partnersRouter = Router();

// Partners List
partnersRouter.get("/", async (request, response) => {
  const partners = await Partner.findAll({
    attributes: ["id", "name", "description", "latitude", "longitude"],
  });

  response.json(partners);
});

// Partners Create
partnersRouter.post("/", async (request, response) => {
  const partner = await Partner.create(request.body);
  response.json(partner);
});

// Partners List By Id
partnersRouter.get("/:id", async (request, response) => {
  const { id } = request.params;

  const partner = await Partner.findByPk(id, {
    attributes: ["id", "name", "description", "latitude", "longitude"],
  });

  if (isUuid(id) && partner != null) {
    return response.json(partner);
  } else {
    return response.status(404).json({ error: "Partner not found." });
  }
});

// Partners Delete
partnersRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  if (isUuid(id)) {
    const partner = await Partner.destroy({
      where: {
        id: id,
      },
    });
  }

  return response.json({ message: "Partner deleted successfully." });
});

module.exports = partnersRouter;
