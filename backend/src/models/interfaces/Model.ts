import { TypeCriarPagamentoSaida } from '../../@types/pagamento';

export interface IModelPagamento {
  criarPagamento: (pagamentosParaCadastrar: TypeCriarPagamentoSaida[]) => Promise<TypeCriarPagamentoSaida[]>;
}
