import {
  TypeCriarPagamento,
  TypeFiltroPagamentoPorDataEntrada,
  TypeFiltroPagamentoPorDataSaída,
  TypePagamentoSaida,
} from '../../@types/pagamento';

export interface IServicePagamento {
  criarPagamento: ({ data, valor, parcelas }: TypeCriarPagamento) => Promise<TypePagamentoSaida[]>;
  filtrarPagamentoPorData: ({
    dataInicial,
    dataFinal,
  }: TypeFiltroPagamentoPorDataEntrada) => Promise<TypeFiltroPagamentoPorDataSaída>;
}
