module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      },
      shippingCosts: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      logo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM,
        values: ['online', 'offline', 'closed', 'temporally closed']
      },
      heroImage: {
        allowNull: true,
        type: Sequelize.STRING
      },
      averageServiceMinutes: {
        allowNull: true,
        type: Sequelize.DOUBLE
      }
      // quedan por añadir las foreign key
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }

}
