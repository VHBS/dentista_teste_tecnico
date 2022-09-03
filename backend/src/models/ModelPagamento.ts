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
