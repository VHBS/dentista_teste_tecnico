import { Router } from 'express';
import { controllerCriarPagamento, controllerFiltrarPagamentoPorData } from '../controllers/pagamento';
import middlewareCriarPagamento from '../middlewares/pagamento';

const routerPagamento = Router();

routerPagamento.post('/pagamento', middlewareCriarPagamento, controllerCriarPagamento);

routerPagamento.get('/filtrar-pagamento', controllerFiltrarPagamentoPorData);

export default routerPagamento;
