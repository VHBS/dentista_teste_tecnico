import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/teste', async (_req, res) => {
  return res.status(200).json({
    message: 'Estou vivo',
  });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
