type TypePagamentoSaida = {
  id?: number;
  data: string;
  valor: number;
  parcela: number;
  totalDeParcelas: number;
};

type TypeCriarPagamento = {
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

type TypePagamento = TypeCriarPagamento | TypePagamentoSaida;

export default TypePagamento;
export {
  TypeMensagemDeErro,
  TypeCriarPagamento,
  TypePagamentoSaida,
  TypeFiltroPagamentoPorDataEntrada,
  TypeFiltroPagamentoPorDataSaída,
};
