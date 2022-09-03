import Pagamento from '../sequelize/models/Pagamento';
import ModelPagamento from '../models/ModelPagamento';
import ServicePagamento from '../services/ServicePagamento';
import ControllerPagamento from '../controllers/ControllerPagamento';

const modelPagamento = new ModelPagamento(Pagamento);
const servicePagamento = new ServicePagamento(modelPagamento);
const controllerPagamento = new ControllerPagamento(servicePagamento);

export default controllerPagamento;
