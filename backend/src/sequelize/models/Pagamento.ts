import { DataTypes, Model } from 'sequelize';
import db from '.';
import criarDataFormatadaISO from '../../utils/geradorDeDatas';
import IPagamento from './interfaces/pagamento';

class Pagamento extends Model implements IPagamento {
  private _id: number;

  private _data: string;

  private _valor: number;

  private _parcela: number;

  private _totalDeParcelas: number;

  get id() {
    return this._id;
  }

  get data() {
    return this._data;
  }

  get valor() {
    return this._valor;
  }

  get parcela() {
    return this._parcela;
  }

  get totalDeParcelas() {
    return this._totalDeParcelas;
  }

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
