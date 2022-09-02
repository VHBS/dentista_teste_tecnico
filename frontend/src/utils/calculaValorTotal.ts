import { TypePagamentoCadastrado } from '../@types/pagamento';

const valorDoTotal = (pagamentos: TypePagamentoCadastrado[]) =>
  (
    pagamentos.reduce((acumulador, pagamentoData) => {
      return acumulador + pagamentoData.valor;
    }, 0) / 100
  ).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  });

export default valorDoTotal;
