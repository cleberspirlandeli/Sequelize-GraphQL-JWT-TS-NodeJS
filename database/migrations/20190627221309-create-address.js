module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      street: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      neighborhood: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      complement: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

    User.hasMany(Address); 
    Address.belongsTo(User);
    
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Address');
  }
};