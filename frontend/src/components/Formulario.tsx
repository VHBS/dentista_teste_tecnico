import React from 'react';

type TypeProps = {
  dataValue: string;
  setDataValue: (value: string | ((prevVar: string) => string)) => void;
  parcelas: number;
  setParcelas: (value: number | ((prevVar: number) => number)) => void;
  valorDoTratamento: number;
  setValorDoTratamento: (value: number | ((prevVar: number) => number)) => void;
  confirmarClique: (event: React.FormEvent<HTMLButtonElement>) => Promise<void>;
};

export default function Formulario({
  dataValue,
  setDataValue,
  parcelas,
  setParcelas,
  valorDoTratamento,
  setValorDoTratamento,
  confirmarClique,
}: TypeProps) {
  const quantidadeDeParcelas = Array.from(new Array(12).keys());
  return (
    <div>
      <h1>Cadastrar Pagamento</h1>
      <form>
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
            onChange={({ target: { value } }) => setParcelas(Number(value))}
          >
            {quantidadeDeParcelas.map((parcela) => {
              const parcelaCorreta = parcela + 1;
              return (
                <option key={parcelaCorreta} value={parcelaCorreta}>
                  {parcelaCorreta}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="valor">
          <input
            min="1"
            id="valor"
            type="number"
            step="0.01"
            value={valorDoTratamento}
            onChange={({ target: { value } }) =>
              setValorDoTratamento(Number(value))
            }
          />
        </label>
        <button type="button" onClick={(e) => confirmarClique(e)}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
