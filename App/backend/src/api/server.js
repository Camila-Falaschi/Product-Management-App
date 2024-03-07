import { listen } from './app';

const port = process.env.API_PORT || 3001;

listen(port);
console.log(`Servidor rodando na porta ${port}`);