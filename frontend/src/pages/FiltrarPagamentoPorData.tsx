import { useState } from 'react';

import { TypePagamentoCadastrado } from '../@types/pagamento';
import FormularioFiltrarPagamentoPorData from '../components/FormularioFiltrarPagamentoPorData';
import Pagamentos from '../components/Pagamentos';
import { Button } from '../styles/componentesGenericos';
import { FormularioPage } from '../styles/pages/FormularioPage';
import { requisicaoFiltrarPagamentosPorData } from '../utils/axios';
import valorDoTotal from '../utils/calculaValorTotal';

export default function FiltrarPagamentoPorData() {
  const [dataInicial, setDataInicial] = useState<string>('');
  const [dataFinal, setDataFinal] = useState<string>('');
  const [mostrarAviso, setMostrarAviso] = useState<boolean>(false);
  const [mostrarDetalhes, setMostrarDetalhes] = useState<boolean>(false);
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
    <FormularioPage>
      <FormularioFiltrarPagamentoPorData
        dataInicial={dataInicial}
        setDataInicial={setDataInicial}
        dataFinal={dataFinal}
        setDataFinal={setDataFinal}
        confirmarFiltroPorDatas={confirmarFiltroPorDatas}
      />
      {mostrarAviso && <h3>Preencha os campos corretamente</h3>}
      {pagamentosFiltrados.length > 0 && (
        <div className="container-pagamentos">
          <div className="resumo-pagamentos">
            <h3>Pagamentos a receber entre: </h3>
            <p>{dataInicialFormatada}</p>
            <p>a</p>
            <p>{dataFinalFormatada}</p>
            <p>Total a Receber: {valorDoTratamento}</p>
            <Button
              type="button"
              onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
            >
              Mostrar Detalhes
            </Button>
            <Button type="button" onClick={() => setPagamentosFiltrados([])}>
              Fechar
            </Button>
          </div>

          <Pagamentos
            pagamentosCadastrados={pagamentosFiltrados}
            mostrarDetalhes={mostrarDetalhes}
          />
        </div>
      )}
    </FormularioPage>
  );
}
