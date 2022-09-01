import { DataTypes, Model } from 'sequelize';
import db from '.';
import criarDataFormatadaISO from '../../utils/geradorDeDatas';

class Pagamento extends Model {
  private id: number;

  private data: string;

  private valor: number;

  private parcela: number;

  private totalDeParcelas: number;

  get pagamentoData() {
    return {
      id: this.id,
      data: this.data,
      valor: this.valor,
      parcela: this.parcela,
      totalDeParcelas: this.totalDeParcelas,
    };
  }
}

Pagamento.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    data: {
      allowNull: false,
      defaultValue: criarDataFormatadaISO(),
      type: DataTypes.DATEONLY,
    },
    valor: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    parcela: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    totalDeParcelas: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'total_de_parcelas',
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Pagamento',
    tableName: 'Pagamentos',
    timestamps: false,
  },
);

export default Pagamento;
