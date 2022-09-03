import {
  TypeCriarPagamento,
  TypeFiltroPagamentoPorDataEntrada,
  TypeFiltroPagamentoPorDataSaída,
  TypePagamentoSaida,
} from '../@types/pagamento';
import { IModelPagamento } from '../models/interfaces/Model';
import criarDataFormatadaISO from '../utils/geradorDeDatas';
import { IServicePagamento } from './interfaces/Service';

export default class ServicePagamento implements IServicePagamento {
  private _model: IModelPagamento;

  constructor(model: IModelPagamento) {
    this._model = model;
  }

  public criarPagamento = async ({ data, valor, parcelas }: TypeCriarPagamento): Promise<TypePagamentoSaida[]> => {
    const numeroDeParcelas = Number(parcelas);
    const valorDasParcelas: number = Math.floor(Number(valor) / numeroDeParcelas);
    const restoDasParcelas: number = Number(valor) % numeroDeParcelas;

    const quantidadeDeParcelas = Array.from(new Array(numeroDeParcelas).keys());

    const pagamentosParaCadastrar = quantidadeDeParcelas.map((parcela) => {
      const proximaParcela = parcela * 30;
      const dataDaParcela = criarDataFormatadaISO(data, proximaParcela);
      return {
        data: dataDaParcela,
        valor: parcela === numeroDeParcelas - 1 ? valorDasParcelas + restoDasParcelas : valorDasParcelas,
        parcela: parcela + 1,
        totalDeParcelas: numeroDeParcelas,
      };
    });

    const pagamentosCadastrados = await this._model.criarPagamento(pagamentosParaCadastrar);

    return pagamentosCadastrados;
  };

  public filtrarPagamentoPorData = async ({
    dataInicial,
    dataFinal,
  }: TypeFiltroPagamentoPorDataEntrada): Promise<TypeFiltroPagamentoPorDataSaída> => {
    const pagamentosFiltradosPorData = await this._model.filtrarPagamentoPorData({
      dataInicial,
      dataFinal,
    });

    if (pagamentosFiltradosPorData.length === 0)
      return {
        status: 404,
        resposta: { menssagem: 'Nenhum pagamento foi encontrado entre as datas especificadas!' },
      };
    return {
      status: 200,
      resposta: pagamentosFiltradosPorData,
    };
  };
}
