'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    user_name: DataTypes.STRING,
    surname: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_type_id:DataTypes.INTEGER,
    email:DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    lga_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};