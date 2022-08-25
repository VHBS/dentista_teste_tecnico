import express from 'express';
import 'dotenv/config';

const app = express();

const { PORT } = process.env || 3001;

app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'oi' });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
