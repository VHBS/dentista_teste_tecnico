module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Pagamentos',
      [
        {
          valor: 500,
          data: new Date(),
          parcela: 1,
          total_de_parcelas: 2,
        },
        {
          valor: 500,
          data: new Date(),
          parcela: 2,
          total_de_parcelas: 2,
        },
        {
          valor: 700,
          data: new Date(),
          parcela: 1,

          total_de_parcelas: 2,
        },
        {
          valor: 700,
          data: '2022-08-01',
          parcela: 2,

          total_de_parcelas: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Pagamentos', null, {});
  },
};
