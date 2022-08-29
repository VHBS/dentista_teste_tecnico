import { DataTypes, Model } from 'sequelize';
import db from '.';
import criarDataFormatadaISO from '../../utils/geradorDeDatas';

class Pagamento extends Model {
  public id: number;

  public data: string;

  public valor: string;

  get userData() {
    return {
      id: this.id,
      data: this.data,
      valor: this.valor,
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
