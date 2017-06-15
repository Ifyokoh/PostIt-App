'use strict';
module.exports = function(sequelize, DataTypes) {
  var groups = sequelize.define('groups', {
    username_of_creator: DataTypes.STRING,
    group: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return groups;
};