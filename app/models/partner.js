module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define('Partner', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    categoryId: DataTypes.UUID,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    address: DataTypes.STRING,
  });

  Partner.associate = models => {
    Partner.belongsTo(models.Category);
  };

  return Partner;
};
