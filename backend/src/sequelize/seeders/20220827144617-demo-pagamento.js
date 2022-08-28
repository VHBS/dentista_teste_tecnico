module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Pagamentos',
      [
        {
          valor: 500,
          data: new Date(),
        },
        {
          valor: 700,
          data: new Date(),
        },
        {
          valor: 700,
          data: '2022-08-01',
        },
        {
          valor: 1000,
          data: '2022-08-02',
        },
        {
          valor: 2000,
          data: '2022-08-03',
        },
        {
          valor: 3000,
          data: '2022-08-04',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Pagamentos', null, {});
  },
};
