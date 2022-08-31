type TypePagamentoSaida = {
  id: number;
  data: string;
  valor: number;
  parcela: number;
  totalDeParcelas: number;
};

type TypePagamentoEntrada = {
  data: string;
  valor: string;
  parcelas: string;
};

type TypeMensagemDeErro = {
  menssagem: string;
};

type TypePagamento = TypePagamentoEntrada | TypePagamentoSaida;

export default TypePagamento;
export { TypeMensagemDeErro, TypePagamentoEntrada, TypePagamentoSaida };
