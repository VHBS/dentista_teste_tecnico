import { Button, Input, Label } from '../styles/componentesGenericos';
import { FormularioComponent } from '../styles/components/FormularioComponent';

type PropTypes = {
  dataInicial: string;
  setDataInicial: (valor: string | ((valorAnterior: string) => string)) => void;
  dataFinal: string;
  setDataFinal: (valor: string | ((valorAnterior: string) => string)) => void;
  confirmarFiltroPorDatas: () => Promise<void | null>;
};

export default function FormularioFiltrarPagamentoPorData({
  dataInicial,
  setDataInicial,
  dataFinal,
  setDataFinal,
  confirmarFiltroPorDatas,
}: PropTypes) {
  return (
    <FormularioComponent>
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
      </form>
      <Button type="button" onClick={confirmarFiltroPorDatas}>
        Filtrar
      </Button>
    </FormularioComponent>
  );
}
