import { TypePagamentoEntrada, TypePagamentoSaida } from '../@types/pagamento';
import Pagamento from '../sequelize/models/Pagamento';
import criarDataFormatadaISO from '../utils/geradorDeDatas';

const servicePagamentoCreate = async ({
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

export default servicePagamentoCreate;
