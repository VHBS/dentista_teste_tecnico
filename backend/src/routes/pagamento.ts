import { Router } from 'express';
import controllerPagamentoCreate from '../controllers/pagamento';

const routerPagamento = Router();

routerPagamento.post('/pagamento', controllerPagamentoCreate);

export default routerPagamento;
