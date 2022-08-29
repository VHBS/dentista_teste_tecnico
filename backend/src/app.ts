import express from 'express';
import cors from 'cors';
import routerPagamento from './routes/pagamento';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routerPagamento);

app.get('/teste', async (_req, res) => {
  return res.status(200).json({
    message: 'Estou vivo',
  });
});

export default app;
