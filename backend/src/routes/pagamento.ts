import { Router } from 'express';
import controllerPagamentoCreate from '../controllers/pagamento';
import middlewarePagamentoCreate from '../middlewares/pagamento';

const routerPagamento = Router();

routerPagamento.post('/pagamento', middlewarePagamentoCreate, controllerPagamentoCreate);

export default routerPagamento;
