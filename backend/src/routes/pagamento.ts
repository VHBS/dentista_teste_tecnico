import { Router } from 'express';
import controllerPagamento from '../factory/FactoryPagamento';
import middlewareCriarPagamento from '../middlewares/pagamento';

const routerPagamento = Router();

routerPagamento.post('/pagamento', middlewareCriarPagamento, controllerPagamento.criarPagamento);

// routerPagamento.get('/filtrar-pagamento', controllerFiltrarPagamentoPorData);

export default routerPagamento;
