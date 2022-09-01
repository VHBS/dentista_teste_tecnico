type TypePagamentoEntrada = {
  data: string;
  valor: number;
  parcelas: number;
};

export type TypePagamentoCadastrado = {
  id: number;
  data: string;
  valor: number;
  parcela: number;
  totalDeParcelas: number;
};

export default TypePagamentoEntrada;
