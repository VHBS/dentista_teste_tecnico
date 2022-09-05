/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Input, Label, Select } from '../styles/componentesGenericos';

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
        <Label htmlFor="data-inicial">
          <span>Data Inicial: </span>
          <Input
            id="data-inicial"
            type="date"
            onChange={({ target: { value } }) => setDataValor(value)}
            value={dataValor}
          />
          <span className="validity" />
        </Label>
        <Label htmlFor="parcelas">
          <span>Quantidade de parcelas: </span>
          <Select
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
          </Select>
        </Label>
        <Label htmlFor="valor">
          <span>Valor total do tratamento: </span>
          <Input
            min="1"
            id="valor"
            type="number"
            step="0.01"
            value={valorDoTratamento}
            onChange={({ target: { value } }) =>
              setValorDoTratamento(Number(value))
            }
          />
        </Label>
        <Button type="button" onClick={(e) => confirmarCadastro(e)}>
          Confirmar
        </Button>
      </form>
    </div>
  );
}
