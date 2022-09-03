import { TypePagamentoSaida, TypeFiltroPagamentoPorDataEntrada } from '../../@types/pagamento';

export interface IModelPagamento {
  criarPagamento: (pagamentosParaCadastrar: TypePagamentoSaida[]) => Promise<TypePagamentoSaida[]>;
  filtrarPagamentoPorData: ({
    dataInicial,
    dataFinal,
  }: TypeFiltroPagamentoPorDataEntrada) => Promise<TypePagamentoSaida[]>;
}
