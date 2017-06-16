
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    username_of_creator: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return group;
};