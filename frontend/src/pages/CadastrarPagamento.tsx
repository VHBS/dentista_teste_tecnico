import { useState } from 'react';

import { TypePagamentoCadastrado } from '../@types/pagamento';
import FormularioCadastrarPagamento from '../components/FormularioCadastrarPagamento';
import Pagamentos from '../components/Pagamentos';
import { Button } from '../styles/componentesGenericos';
import { FormularioPage } from '../styles/pages/FormularioPage';
import { requisicaoCriarPagamento } from '../utils/axios';
import valorDoTotal from '../utils/calculaValorTotal';

export default function CadastrarPagamento() {
  const [dataValor, setDataValor] = useState<string>('');
  const [parcelas, setParcelas] = useState<number>(1);
  const [valorDoTratamento, setValorDoTratamento] = useState<number>(1);
  const [mostrarDetalhes, setMostrarDetalhes] = useState<boolean>(false);
  const [pagamentosCadastrados, setPagamentosCadastrados] = useState<
    TypePagamentoCadastrado[]
  >([]);
  const [mostrarAviso, setMostrarAviso] = useState<boolean>(false);

  const reiniciarFomulario = (): void => {
    setDataValor('');
    setParcelas(1);
    setValorDoTratamento(1);
  };

  const verificarInputs = () => {
    if (!dataValor || !valorDoTratamento) {
      return false;
    }
    return true;
  };

  const confirmarCadastro = async (
    event: React.FormEvent<HTMLButtonElement>
  ): Promise<void | null> => {
    event.preventDefault();
    if (verificarInputs()) {
      const resultApi = await requisicaoCriarPagamento({
        data: dataValor,
        parcelas,
        valor: valorDoTratamento * 100,
      });
      reiniciarFomulario();
      return setPagamentosCadastrados(resultApi);
    }
    setMostrarAviso(true);
    setTimeout(() => {
      setMostrarAviso(false);
    }, 3000);
    return null;
  };

  const valorTotalDosPagamentosCadastrados = valorDoTotal(
    pagamentosCadastrados
  );

  return (
    <FormularioPage>
      <FormularioCadastrarPagamento
        dataValor={dataValor}
        setDataValor={setDataValor}
        parcelas={parcelas}
        setParcelas={setParcelas}
        valorDoTratamento={valorDoTratamento}
        setValorDoTratamento={setValorDoTratamento}
        confirmarCadastro={confirmarCadastro}
      />
      {mostrarAviso && <h3>Preencha os campos corretamente</h3>}
      {pagamentosCadastrados.length > 0 && (
        <div className="container-pagamentos">
          <div className="resumo-pagamentos">
            <h1>Pagamento Cadastrado!</h1>
            <p>Total: {valorTotalDosPagamentosCadastrados}</p>
            <p>Parcelas: {pagamentosCadastrados.length}</p>
            <Button
              type="button"
              onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
            >
              Mostrar Detalhes
            </Button>
            <Button type="button" onClick={() => setPagamentosCadastrados([])}>
              Fechar
            </Button>
          </div>
          <Pagamentos
            pagamentosCadastrados={pagamentosCadastrados}
            mostrarDetalhes={mostrarDetalhes}
          />
        </div>
      )}
    </FormularioPage>
  );
}
