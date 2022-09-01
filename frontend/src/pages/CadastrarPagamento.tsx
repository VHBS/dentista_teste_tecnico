import { useState } from 'react';

import { TypePagamentoCadastrado } from '../@types/pagamento';
import Formulario from '../components/Formulario';
import PagamentoCadastrado from '../components/PagamentoCadastrado';
import { requisicaoCriarPagamento } from '../utils/axios';

export default function CadastrarPagamento() {
  const [dataValue, setDataValue] = useState<string>('');
  const [parcelas, setParcelas] = useState<number>(1);
  const [valorDoTratamento, setValorDoTratamento] = useState<number>(1);
  const [pagamentosCadastrados, setPagamentosCadastrados] = useState<
    TypePagamentoCadastrado[]
  >([]);

  const reiniciarFomulario = (): void => {
    setDataValue('');
    setParcelas(1);
    setValorDoTratamento(1);
  };

  const verificarInputs = () => {
    if (!dataValue || !valorDoTratamento) {
      return false;
    }
    return true;
  };

  const confirmarClique = async (
    event: React.FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault();
    if (verificarInputs()) {
      const resultApi = await requisicaoCriarPagamento({
        data: dataValue,
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
      <Formulario
        dataValue={dataValue}
        setDataValue={setDataValue}
        parcelas={parcelas}
        setParcelas={setParcelas}
        valorDoTratamento={valorDoTratamento}
        setValorDoTratamento={setValorDoTratamento}
        confirmarClique={confirmarClique}
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
