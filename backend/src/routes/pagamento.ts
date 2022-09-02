import { Router } from 'express';
import { controllerCriarPagamento, controllerFiltrarPagamentoPorData } from '../controllers/pagamento';
import middlewareCriarPagamento from '../middlewares/pagamento';

const routerPagamento = Router();

routerPagamento.post('/pagamento', middlewareCriarPagamento, controllerCriarPagamento);

routerPagamento.post('/filtrar-pagamento', controllerFiltrarPagamentoPorData);

export default routerPagamento;
