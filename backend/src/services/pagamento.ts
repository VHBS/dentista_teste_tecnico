import { Op } from 'sequelize';
import {
  TypePagamentoEntrada,
  TypePagamentoSaida,
  TypeFiltroPagamentoPorDataEntrada,
  TypeFiltroPagamentoPorDataSaída,
} from '../@types/pagamento';
import Pagamento from '../sequelize/models/Pagamento';
import criarDataFormatadaISO from '../utils/geradorDeDatas';

const serviceCriarPagamento = async ({
  data,
  valor,
  parcelas,
}: TypePagamentoEntrada): Promise<TypePagamentoSaida[]> => {
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

  const pagamentosCadastrados = await Pagamento.bulkCreate(pagamentosParaCadastrar);

  return pagamentosCadastrados;
};

const serviceFiltrarPagamentoPorData = async ({
  dataInicial,
  dataFinal,
}: TypeFiltroPagamentoPorDataEntrada): Promise<TypeFiltroPagamentoPorDataSaída> => {
  const pagamentosFiltradosPorData = await Pagamento.findAll({
    where: {
      data: {
        [Op.between]: [dataInicial, dataFinal],
      },
    },
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

export { serviceCriarPagamento, serviceFiltrarPagamentoPorData };
