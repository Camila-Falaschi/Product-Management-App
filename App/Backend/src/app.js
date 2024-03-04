import cors from 'cors';
import express from 'express';
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/api/produtos', require('./routes/produtoRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
