import { useState } from 'react';

import { testandoAxios } from '../utils/axios';

export default function Formulario() {
  const [dataValue, setDataValue] = useState<string>('');
  const [parcelas, setParcelas] = useState<string>('1');
  const [valorDoTratamento, setValorDoTratamento] = useState<string>('0');

  const quantidadeDeParcelas = Array.from(new Array(12).keys());

  const confirmarClique = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const resultApi = await testandoAxios();
    console.log(resultApi);
    return resultApi;
  };

  return (
    <div className="App">
      <h1>Cadastrar Pagamento</h1>
      <label htmlFor="data-inicial">
        Data Inicial
        <input
          id="data-inicial"
          type="date"
          onChange={({ target: { value } }) => setDataValue(value)}
          value={dataValue}
        />
        <span className="validity" />
      </label>
      <label htmlFor="parcelas">
        Quantidade de parcelas
        <select
          name="parcelas"
          id="parcelas"
          value={parcelas}
          onChange={({ target: { value } }) => setParcelas(value)}
        >
          {quantidadeDeParcelas.map((value) => {
            return (
              <option key={value + 1} value={value + 1}>
                {value + 1}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="valor">
        <input
          min="0"
          id="valor"
          type="number"
          value={valorDoTratamento}
          onChange={({ target: { value } }) => setValorDoTratamento(value)}
        />
      </label>
      <button type="button" onClick={(e) => confirmarClique(e)}>
        Confirmar
      </button>
    </div>
  );
}
