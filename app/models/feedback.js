module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('Feedback', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    author: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  return Feedback;
};
