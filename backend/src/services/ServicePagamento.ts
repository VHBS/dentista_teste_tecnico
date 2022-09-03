import { TypeCriarPagamento, TypeCriarPagamentoSaida } from '../@types/pagamento';
import { IModel } from '../models/interfaces/Model';
import criarDataFormatadaISO from '../utils/geradorDeDatas';
import { IService } from './interfaces/Service';

export default class ServicePagamento implements IService {
  private _model: IModel;

  constructor(model: IModel) {
    this._model = model;
  }

  criarPagamento = async ({ data, valor, parcelas }: TypeCriarPagamento): Promise<TypeCriarPagamentoSaida[]> => {
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
}

// import { Op } from 'sequelize';
// import {
//   TypePagamentoEntrada,
//   TypePagamentoSaida,
//   TypeFiltroPagamentoPorDataEntrada,
//   TypeFiltroPagamentoPorDataSaída,
// } from '../@types/pagamento';
// import Pagamento from '../sequelize/models/Pagamento';
// import criarDataFormatadaISO from '../utils/geradorDeDatas';

// const serviceCriarPagamento = async ({
//   data,
//   valor,
//   parcelas,
// }: TypePagamentoEntrada): Promise<TypePagamentoSaida[]> => {
//   const numeroDeParcelas = Number(parcelas);
//   const valorDasParcelas: number = Math.floor(Number(valor) / numeroDeParcelas);
//   const restoDasParcelas: number = Number(valor) % numeroDeParcelas;

//   const quantidadeDeParcelas = Array.from(new Array(numeroDeParcelas).keys());

//   const pagamentosParaCadastrar = quantidadeDeParcelas.map((parcela) => {
//     const proximaParcela = parcela * 30;
//     const dataDaParcela = criarDataFormatadaISO(data, proximaParcela);
//     return {
//       data: dataDaParcela,
//       valor: parcela === numeroDeParcelas - 1 ? valorDasParcelas + restoDasParcelas : valorDasParcelas,
//       parcela: parcela + 1,
//       totalDeParcelas: numeroDeParcelas,
//     };
//   });

//   const pagamentosCadastrados = await Pagamento.bulkCreate(pagamentosParaCadastrar);

//   return pagamentosCadastrados;
// };

// const serviceFiltrarPagamentoPorData = async (
//   { dataInicial, dataFinal }: TypeFiltroPagamentoPorDataEntrada,
//   pagamento: typeof Pagamento = Pagamento,
// ): Promise<TypeFiltroPagamentoPorDataSaída> => {
//   const pagamentosFiltradosPorData = await pagamento.findAll({
//     where: {
//       data: {
//         [Op.between]: [dataInicial, dataFinal],
//       },
//     },
//   });

//   if (pagamentosFiltradosPorData.length === 0)
//     return {
//       status: 404,
//       resposta: { menssagem: 'Nenhum pagamento foi encontrado entre as datas especificadas!' },
//     };
//   return {
//     status: 200,
//     resposta: pagamentosFiltradosPorData,
//   };
// };

// export { serviceCriarPagamento, serviceFiltrarPagamentoPorData };
