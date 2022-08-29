import express from 'express';
import cors from 'cors';
import routerPagamento from './routes/pagamento';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routerPagamento);

export default app;
