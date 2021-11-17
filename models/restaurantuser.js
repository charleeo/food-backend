'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestaurantUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RestaurantUser.init({
    role_id: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    restaurant_identifier:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RestaurantUser',
  });
  return RestaurantUser;
};