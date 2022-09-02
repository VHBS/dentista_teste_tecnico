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

type TypeFiltroPagamentoPorDataEntrada = {
  dataInicial: string;
  dataFinal: string;
};

type TypeFiltroPagamentoPorDataSaída = {
  status: number;
  resposta: TypePagamentoSaida[] | TypeMensagemDeErro;
};

type TypePagamento = TypePagamentoEntrada | TypePagamentoSaida;

export default TypePagamento;
export {
  TypeMensagemDeErro,
  TypePagamentoEntrada,
  TypePagamentoSaida,
  TypeFiltroPagamentoPorDataEntrada,
  TypeFiltroPagamentoPorDataSaída,
};
