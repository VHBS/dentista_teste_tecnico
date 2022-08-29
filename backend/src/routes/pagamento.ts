import { Router } from 'express';

const routerPagamento = Router();

routerPagamento.post('/pagamento', async (_req, res) => {
  return res.status(200).json({
    message: 'Rota pagamento criada',
  });
});

export default routerPagamento;
