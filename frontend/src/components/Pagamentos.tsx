import { TypePagamentoCadastrado } from '../@types/pagamento';
import { Pagamentos } from '../styles/components/Pagamento';

type TypeProps = {
  pagamentosCadastrados: TypePagamentoCadastrado[];
  mostrarDetalhes: boolean;
};

export default function PagamentoCadastrado({
  pagamentosCadastrados,
  mostrarDetalhes,
}: TypeProps) {
  return (
    <Pagamentos>
      {mostrarDetalhes && (
        <div className="container-detalhes">
          <h3>Detalhes: </h3>
          {pagamentosCadastrados.map((pagamento) => {
            return (
              <div key={pagamento.id} className="detalhe">
                <h4>
                  Data de Vencimento:{' '}
                  {new Date(pagamento.data).toLocaleDateString('pt-Br', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    timeZone: 'UTC',
                  })}
                </h4>
                <p>Parcela: {pagamento.parcela}</p>
                <p>
                  Valor:{' '}
                  {(pagamento.valor / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </Pagamentos>
  );
}
