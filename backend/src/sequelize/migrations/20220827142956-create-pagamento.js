module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Pagamentos',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        data: {
          allowNull: false,
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATEONLY,
        },
        valor: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        underscored: true,
      },
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Pagamentos');
  },
};
