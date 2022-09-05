import { useState } from 'react';

import { TypePagamentoCadastrado } from '../@types/pagamento';
import Pagamentos from '../components/Pagamentos';
import { Button, Input, Label } from '../styles/componentesGenericos';
import { requisicaoFiltrarPagamentosPorData } from '../utils/axios';
import valorDoTotal from '../utils/calculaValorTotal';

export default function FiltrarPagamentoPorData() {
  const [dataInicial, setDataInicial] = useState<string>('');
  const [dataFinal, setDataFinal] = useState<string>('');
  const [mostrarAviso, setMostrarAviso] = useState<boolean>(false);

  const [pagamentosFiltrados, setPagamentosFiltrados] = useState<
    TypePagamentoCadastrado[]
  >([]);

  const verificarInputs = () => {
    if (!dataInicial || !dataFinal) {
      return false;
    }
    return true;
  };

  const confirmarFiltroPorDatas = async () => {
    if (verificarInputs()) {
      const result = await requisicaoFiltrarPagamentosPorData({
        dataInicial,
        dataFinal,
      });
      if (result.length > 0) {
        return setPagamentosFiltrados(result);
      }
    }
    setMostrarAviso(true);
    setTimeout(() => {
      setMostrarAviso(false);
    }, 3000);
    return null;
  };

  const fortmatarDataMesCurto = (data: string) => {
    return new Date(data).toLocaleDateString('pt-Br', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    });
  };
  const dataInicialFormatada = fortmatarDataMesCurto(dataInicial);
  const dataFinalFormatada = fortmatarDataMesCurto(dataFinal);

  const valorDoTratamento = valorDoTotal(pagamentosFiltrados);

  return (
    <div>
      <h1>Filtrar pagamentos por data</h1>

      <form>
        <Label htmlFor="data-inicial">
          <span>A partir da data:</span>
          <Input
            id="data-inicial"
            type="date"
            onChange={({ target: { value } }) => setDataInicial(value)}
            value={dataInicial}
          />
        </Label>
        <Label htmlFor="data-final">
          <span>Até a data:</span>
          <Input
            id="data-final"
            type="date"
            onChange={({ target: { value } }) => setDataFinal(value)}
            value={dataFinal}
          />
        </Label>
        <Button type="button" onClick={confirmarFiltroPorDatas}>
          Filtrar
        </Button>
      </form>
      {mostrarAviso && <h3>Preencha os campos corretamente</h3>}
      {pagamentosFiltrados.length > 0 && (
        <>
          <h3>Pagamentos a receber entre:</h3>
          <p>
            {dataInicialFormatada} a {dataFinalFormatada}
          </p>
          <p>Total a Receber: {valorDoTratamento}</p>

          <Pagamentos
            pagamentosCadastrados={pagamentosFiltrados}
            setPagamentosCadastrados={setPagamentosFiltrados}
          />
        </>
      )}
    </div>
  );
}
