'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant_User_Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Restaurant_User_Role.init({
    restaurant_user_id: DataTypes.INTEGER,
    restaurnt_role_ids: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurant_User_Role',
  });
  return Restaurant_User_Role;
};