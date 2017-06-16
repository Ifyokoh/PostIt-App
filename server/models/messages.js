
module.exports = (sequelize, DataTypes) => {
  const messages = sequelize.define('messages', {
    username: DataTypes.STRING,
    message: DataTypes.STRING,
    time: DataTypes.TIME
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return messages;
};