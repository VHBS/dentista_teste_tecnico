type TypeProps = {
  dataValor: string;
  setDataValor: (valor: string | ((valorAnterior: string) => string)) => void;
  parcelas: number;
  setParcelas: (valor: number | ((valorAnterior: number) => number)) => void;
  valorDoTratamento: number;
  setValorDoTratamento: (
    valor: number | ((valorAnterior: number) => number)
  ) => void;
  confirmarCadastro: (
    evento: React.FormEvent<HTMLButtonElement>
  ) => Promise<void | null>;
};

export default function FormularioCadastrarPagamento({
  dataValor,
  setDataValor,
  parcelas,
  setParcelas,
  valorDoTratamento,
  setValorDoTratamento,
  confirmarCadastro,
}: TypeProps) {
  const quantidadeDeParcelas = Array.from(new Array(12).keys());
  return (
    <div>
      <h1>Cadastrar pagamento</h1>
      <form>
        <label htmlFor="data-inicial">
          Data Inicial
          <input
            id="data-inicial"
            type="date"
            onChange={({ target: { value } }) => setDataValor(value)}
            value={dataValor}
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
        <button type="button" onClick={(e) => confirmarCadastro(e)}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
