import { TypeCriarPagamentoSaida } from '../../@types/pagamento';

export interface IModel {
  criarPagamento: (pagamentosParaCadastrar: TypeCriarPagamentoSaida[]) => Promise<TypeCriarPagamentoSaida[]>;
}
