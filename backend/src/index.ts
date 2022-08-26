import express from 'express';
import 'dotenv/config';

const app = express();

const { PORT, DB_USER, DB_PASS, DB_NAME, DB_PORT, DB_HOST } = process.env;

app.use(express.json());

app.get('/teste', (_req, res) => {
  return res.status(200).json({
    message: {
      DB_HOST,
      DB_USER,
      DB_PASS,
      DB_NAME,
      DB_PORT,
    },
  });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
