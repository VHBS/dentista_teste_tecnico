export default interface IPagamento {
  id: number;
  data: string;
  valor: number;
  parcela: number;
  totalDeParcelas: number;
}
