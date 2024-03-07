require('dotenv').config();

import { Client } from 'pg';

const client = new Client({
  user: process.env.POSTGRES_USER || 'root',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_NAME || 'productManagementAppDB',
  password: process.env.POSTGRES_PASSWORD || 'password',
  port: 5432,
});

async function connectDatabase() {
  try {
    await client.connect();
    console.log('Conexão bem-sucedida!');
    return client;
  } catch (error) {
    console.error('Erro ao conectar:', error);
    throw error;
  }
}

export default { connectDatabase };