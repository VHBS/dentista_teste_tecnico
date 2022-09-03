import { TypeCriarPagamentoSaida } from '../@types/pagamento';
import Pagamento from '../sequelize/models/Pagamento';
import { IModelPagamento } from './interfaces/Model';

export default class ModelPagamento implements IModelPagamento {
  private _db: typeof Pagamento;

  constructor(db: typeof Pagamento) {
    this._db = db;
  }

  criarPagamento = async (pagamentosParaCadastrar: TypeCriarPagamentoSaida[]): Promise<TypeCriarPagamentoSaida[]> => {
    const pagamentosCadastrados = await this._db.bulkCreate(pagamentosParaCadastrar);

    return pagamentosCadastrados;
  };
}

// import { Op } from 'sequelize';
// import Pagamento from '../sequelize/models/Pagamento';

// import { TypeFiltroPagamentoPorDataEntrada, TypePagamentoEntrada } from '../@types/pagamento';

// const modelCriarPagamento = async (pagamentosParaCadastrar: TypePagamentoEntrada[]) => {
//   const pagamentosCadastrados = await Pagamento.bulkCreate(pagamentosParaCadastrar);

//   return pagamentosCadastrados;
// };

// const modelFiltrarPagamendoPorData = async ({ dataInicial, dataFinal }: TypeFiltroPagamentoPorDataEntrada) => {
//   const pagamentosFiltradosPorData = Pagamento.findAll({
//     where: {
//       data: {
//         [Op.between]: [dataInicial, dataFinal],
//       },
//     },
//   });

//   return pagamentosFiltradosPorData;
// };

// export { modelFiltrarPagamendoPorData, modelCriarPagamento };
