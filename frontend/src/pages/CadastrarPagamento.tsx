import { useState } from 'react';
import styled from 'styled-components';

import { TypePagamentoCadastrado } from '../@types/pagamento';
import FormularioCadastrarPagamento from '../components/FormularioCadastrarPagamento';
import Pagamentos from '../components/Pagamentos';
import { requisicaoCriarPagamento } from '../utils/axios';
import valorDoTotal from '../utils/calculaValorTotal';

const CadastrarPagamentoPage = styled.div`
  @media (max-width: 380px) {
    padding-top: 6em;
  }

  @media (min-width: 380px) and (max-width: 532px) {
    padding-top: 6em;
  }

  padding-block: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function CadastrarPagamento() {
  const [dataValor, setDataValor] = useState<string>('');
  const [parcelas, setParcelas] = useState<number>(1);
  const [valorDoTratamento, setValorDoTratamento] = useState<number>(1);
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
    <CadastrarPagamentoPage>
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
        <>
          <h1>Pagamento Cadastrado!</h1>
          <p>Total: {valorTotalDosPagamentosCadastrados}</p>
          <p>Parcelas: {pagamentosCadastrados.length}</p>
          <Pagamentos
            pagamentosCadastrados={pagamentosCadastrados}
            setPagamentosCadastrados={setPagamentosCadastrados}
          />
        </>
      )}
    </CadastrarPagamentoPage>
  );
}
