import { useState } from 'react';

import { TypePagamentoCadastrado } from '../@types/pagamento';
import FormularioCadastrarPagamento from '../components/FormularioCadastrarPagamento';
import PagamentoCadastrado from '../components/PagamentoCadastrado';
import { requisicaoCriarPagamento } from '../utils/axios';

export default function CadastrarPagamento() {
  const [dataValor, setDataValor] = useState<string>('');
  const [parcelas, setParcelas] = useState<number>(1);
  const [valorDoTratamento, setValorDoTratamento] = useState<number>(1);
  const [pagamentosCadastrados, setPagamentosCadastrados] = useState<
    TypePagamentoCadastrado[]
  >([]);

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
  ): Promise<void> => {
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
    return setPagamentosCadastrados([]);
  };

  return (
    <div>
      <FormularioCadastrarPagamento
        dataValor={dataValor}
        setDataValor={setDataValor}
        parcelas={parcelas}
        setParcelas={setParcelas}
        valorDoTratamento={valorDoTratamento}
        setValorDoTratamento={setValorDoTratamento}
        confirmarCadastro={confirmarCadastro}
      />
      {pagamentosCadastrados.length > 0 && (
        <PagamentoCadastrado
          pagamentosCadastrados={pagamentosCadastrados}
          setPagamentosCadastrados={setPagamentosCadastrados}
        />
      )}
    </div>
  );
}
