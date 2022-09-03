type TypeCriarPagamentoSaida = {
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
  resposta: TypeCriarPagamentoSaida[] | TypeMensagemDeErro;
};

type TypePagamento = TypeCriarPagamento | TypeCriarPagamentoSaida;

export default TypePagamento;
export {
  TypeMensagemDeErro,
  TypeCriarPagamento,
  TypeCriarPagamentoSaida,
  TypeFiltroPagamentoPorDataEntrada,
  TypeFiltroPagamentoPorDataSaída,
};
