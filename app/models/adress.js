
module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
      street: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      number: DataTypes.INTEGER,
      complement: DataTypes.STRING
    });

    return Address;
  }