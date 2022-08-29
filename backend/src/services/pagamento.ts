import TypePagamento from '../@types/pagamento';
import Pagamento from '../sequelize/models/Pagamento';

const servicePagamentoCreate = async ({ data, valor }: TypePagamento) => {
  const result = await Pagamento.create({ data, valor });
  return result;
};

export default servicePagamentoCreate;
