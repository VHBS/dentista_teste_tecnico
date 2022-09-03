import { Op } from 'sequelize';
import { TypeFiltroPagamentoPorDataEntrada, TypePagamentoSaida } from '../@types/pagamento';
import Pagamento from '../sequelize/models/Pagamento';
import { IModelPagamento } from './interfaces/Model';

export default class ModelPagamento implements IModelPagamento {
  private _db: typeof Pagamento;

  constructor(db: typeof Pagamento) {
    this._db = db;
  }

  public criarPagamento = async (pagamentosParaCadastrar: TypePagamentoSaida[]): Promise<TypePagamentoSaida[]> => {
    const pagamentosCadastrados = await this._db.bulkCreate(pagamentosParaCadastrar);

    return pagamentosCadastrados;
  };

  public filtrarPagamentoPorData = async ({
    dataInicial,
    dataFinal,
  }: TypeFiltroPagamentoPorDataEntrada): Promise<TypePagamentoSaida[]> => {
    const pagamentosFiltradosPorData = this._db.findAll({
      where: {
        data: {
          [Op.between]: [dataInicial, dataFinal],
        },
      },
    });

    return pagamentosFiltradosPorData;
  };
}

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
